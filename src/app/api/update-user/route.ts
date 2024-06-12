import { NextApiRequest, NextApiResponse } from 'next';
import { onUpdateClerkUser } from '../../services/clerkService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const { userId, email, first_name, image_url } = req.body;
    if (!userId || (!email && !first_name && !image_url)) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const result = await onUpdateClerkUser(userId, { email, first_name, image_url });

    if (!result) {
      return res.status(500).json({ message: 'Error updating user, result is null or undefined' });
    }

    return res.status(result.status).json(result);
  } catch (error:any) {
    console.error('Error updating user:', error);
    return res.status(500).json({ message: 'Error updating user', error: error.message });
  }
}
