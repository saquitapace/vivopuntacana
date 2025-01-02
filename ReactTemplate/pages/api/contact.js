import { insertContactUsDetails } from '@/src/lib/contact';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message, phone, subject } = req.body;
    try {
      await insertContactUsDetails({
        firstName,
        lastName,
        email,
        message,
        phone,
        subject,
      });
      return res
        .status(200)
        .json({ message: 'Contact details saved successfully.' });
    } catch (error) {
      console.error('Error saving contact details:', error);
      return res.status(500).json({ message: 'Error saving contact details.' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed.' });
  }
}
