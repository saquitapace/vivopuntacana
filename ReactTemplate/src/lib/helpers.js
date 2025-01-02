import { clerkClient } from '@clerk/nextjs/server';

export async function updateClerkUser(userId, userData) {
  try {
    await clerkClient.users.updateUser(userId, userData);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
