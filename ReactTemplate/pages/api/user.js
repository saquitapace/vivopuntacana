import { createOrUpdateUser } from '@/src/lib/users';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    email,
    clerkId,
    role,
    firstName,
    lastName,
    phoneNumber,
    interests,
    artistType,
  } = req.body;
  if (!email || !clerkId) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  try {
    const user = createOrUpdateUser({
      clerkId,
      email,
      firstName,
      lastName,
      phoneNumber,
      profileCompleted: true,
      role,
      interests,
      artistType,
    });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user', error });
  }
}
