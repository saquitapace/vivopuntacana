import { headers } from 'next/headers';
import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/nextjs/server';
import { createOrUpdateUser, updateUser } from '@/src/lib/users';

export async function POST(req) {
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your webhook secret
  const wh = new Webhook(process.env.WEBHOOK_SECRET);

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) ;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    });
  }

  // Handle the webhook
  const eventType = evt.type;
  const { id } = evt.data;

  try {
    if (eventType === 'user.created') {
      const { email_addresses, phone_numbers, first_name, last_name, image_url } = evt.data;
      
      const primaryEmail = email_addresses?.find(email => email.id === evt.data.primary_email_address_id)?.email_address;
      const primaryPhone = phone_numbers?.find(phone => phone.id === evt.data.primary_phone_number_id)?.phone_number;

      await createOrUpdateUser({
        clerk_id: id,
        email: primaryEmail,
        phone_number: primaryPhone,
        first_name,
        last_name,
        profile_image_url: image_url,
      });
    }

    if (eventType === 'user.updated') {
      const { email_addresses, phone_numbers, first_name, last_name, image_url } = evt.data;
      
      const primaryEmail = email_addresses?.find(email => email.id === evt.data.primary_email_address_id)?.email_address;
      const primaryPhone = phone_numbers?.find(phone => phone.id === evt.data.primary_phone_number_id)?.phone_number;

      await updateUser(id, {
        email: primaryEmail,
        phone_number: primaryPhone,
        first_name,
        last_name,
        profile_image_url: image_url,
      });
    }

    if (eventType === 'user.deleted') {
      // Handle user deletion if needed
      // You might want to soft delete the user or handle it according to your needs
    }

    return new Response('Webhook processed successfully', { status: 200 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Error processing webhook', { status: 500 });
  }
}
