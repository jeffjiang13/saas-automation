import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';
import { createClerkUser, updateClerkUser } from '../../services/clerkService';
import crypto from 'crypto';

interface ClerkEvent {
  data: {
    id: string;
    email_addresses: { email_address: string }[];
    first_name: string;
    image_url: string;
  };
  type: string;
}

const verifySignature = (body: string, signature: string, secret: string): boolean => {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body, 'utf8')
    .digest('hex');
  return expectedSignature === signature;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const signature = req.headers['clerk-signature'] as string;
    const body = JSON.stringify(req.body);

    const isValidSignature = verifySignature(body, signature, process.env.CLERK_SECRET_KEY as string);

    if (!isValidSignature) {
      return res.status(400).json({ message: 'Invalid webhook signature' });
    }

    const event: ClerkEvent = req.body;
    const { id, email_addresses, first_name, image_url } = event.data;

    const email = email_addresses[0]?.email_address;
    console.log('✅', event);

    await db.user.upsert({
      where: { clerkId: id },
      update: {
        email,
        name: first_name,
        profileImage: image_url,
      },
      create: {
        clerkId: id,
        email,
        name: first_name || '',
        profileImage: image_url || '',
      },
    });

    // Synchronize with Clerk
    await updateClerkUser(id, {
      email_address: email,
      first_name: first_name,
      image_url: image_url,
    });

    res.status(200).json({ message: 'User updated in database and Clerk successfully' });
  } catch (error) {
    console.error('Error updating database and Clerk:', error);
    res.status(500).json({ message: 'Error updating user in database and Clerk' });
  }
}
