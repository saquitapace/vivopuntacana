// pages/api/update-user.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    // Removed Clerk integration
    // const { user } = await clerk.users.getUser(req.body.id);

    const { id, name, email } = req.body;

    if (!id || (!name && !email)) {
      return res.status(400).json({ message: 'ID and at least one field to update are required' });
    }

    try {
      const updatedUser = await db.user.update({
        where: { id },
        data: { name, email },
      });
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating user', error });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error updating user', error });
  }
}
