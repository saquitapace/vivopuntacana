import { Webhook } from 'svix';
import { buffer } from 'micro';
import { clerkClient } from '@clerk/nextjs/server';
import { createUser, updateUser } from '@/src/lib/users';

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookSecret = process.env.WEBHOOK_SECRET;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get the headers
    const svix_id = req.headers['svix-id'];
    const svix_timestamp = req.headers['svix-timestamp'];
    const svix_signature = req.headers['svix-signature'];

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return res.status(400).json({ message: 'Missing required headers' });
    }

    // Get the body
    const body = await buffer(req);
    const payload = JSON.parse(body.toString());

    // Create a new Svix instance with your secret
    const wh = new Webhook(webhookSecret);

    // Verify the payload with the headers
    const evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });

    // Handle the webhook
    const { id } = evt.data;
    const eventType = evt.type;

    if (eventType === 'user.created') {
      // Handle both social and regular sign-ups
      const user = await clerkClient.users.getUser(id);
      const isSocialLogin = user.externalAccounts?.length > 0;

      // For social login, we need to set the role and other metadata
      if (isSocialLogin) {
        const firstName = user.firstName || '';
        const lastName = user.lastName || '';
        const phoneNumber = user.phoneNumbers?.[0]?.phoneNumber || '';
        const email = user.emailAddresses?.[0]?.emailAddress || '';

        // Update Clerk user metadata
        await clerkClient.users.updateUser(id, {
          firstName,
          lastName,
          phoneNumbers: phoneNumber ? [{ phoneNumber }] : undefined,
          publicMetadata: {
            role: 'user', // Default role for social login
            profile_completed: false,
          },
        });

        // Create user in MySQL database
        await createUser({
          clerkId: id,
          firstName,
          lastName,
          email,
          phoneNumber,
          role: 'user',
          profileCompleted: false,
        });
      }
      // For regular sign-up
      else {
        const firstName = user.firstName || '';
        const lastName = user.lastName || '';
        const phoneNumber = user.phoneNumbers?.[0]?.phoneNumber || '';
        const email = user.emailAddresses?.[0]?.emailAddress || '';
        const role = user.publicMetadata?.role || user?.role || 'user';

        // Create user in MySQL database
        await createUser({
          clerkId: id,
          firstName,
          lastName,
          email,
          phoneNumber,
          role,
          profileCompleted: true,
        });

        // Update Clerk user metadata
        await clerkClient.users.updateUser(id, {
          publicMetadata: {
            ...user.publicMetadata,
            profileCompleted: false,
          },
        });
      }
    }
    // Handle user updates
    else if (eventType === 'user.updated') {
      const user = await clerkClient.users.getUser(id);

      await updateUser(id, {
        first_name: user.firstName || '',
        last_name: user.lastName || '',
        email: user.emailAddresses?.[0]?.emailAddress || '',
        phone_number: user.phoneNumbers?.[0]?.phoneNumber || '',
        role: user.publicMetadata?.role || user?.role || 'user',
        profile_completed: true,
      });
      await clerkClient.users.updateUser(id, {
        publicMetadata: {
          profile_completed: true,
        },
      });
    }

    return res.status(200).json({ message: 'Webhook processed successfully' });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'Webhook error', error: err.message });
  }
}
