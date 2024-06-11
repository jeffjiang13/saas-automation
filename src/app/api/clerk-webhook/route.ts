import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Helper function to verify the webhook signature
const verifySignature = (body: string, signature: string, secret: string): boolean => {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body, 'utf8')
    .digest('hex');
  return expectedSignature === signature;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const signature = req.headers.get('clerk-signature') as string;
    const rawBody = JSON.stringify(body);

    // Verify the signature
    const isValidSignature = verifySignature(rawBody, signature, process.env.CLERK_WEBHOOK_SECRET as string);
    if (!isValidSignature) {
      return new NextResponse('Invalid webhook signature', { status: 400 });
    }

    const { id, email_addresses, first_name, image_url } = body?.data;
    const email = email_addresses[0]?.email_address;

    console.log('✅', body);

    await db.user.update({
      where: { clerkId: id },
      data: {
        email,
        name: first_name,
        profileImage: image_url,
      }
    })

    await db.user.create({
      data:{
        clerkId: id,
        email,
        name: first_name || '',
        profileImage: image_url || '',
      }
    });

    return new NextResponse('User updated in database successfully', { status: 200 });
  } catch (error) {
    console.error('Error updating database:', error);
    return new NextResponse('Error updating user in database', { status: 500 });
  }
}
