import { NextApiRequest, NextApiResponse } from 'next';
import { onCompleteUserRegistration } from '../../services/clerkService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const { email, first_name, image_url } = req.body;
    if (!email || !first_name) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const result = await onCompleteUserRegistration({ email, first_name, image_url });

    if (!result) {
      return res.status(500).json({ message: 'Error creating user, result is null or undefined' });
    }

    return res.status(result.status).json(result);
  } catch (error:any) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Error creating user', error: error.message });
  }
}
