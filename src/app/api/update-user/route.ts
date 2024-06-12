import { NextResponse } from 'next/server';
import { onUpdateClerkUser } from '../../services/clerkService';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, email, first_name, image_url } = body;

    if (!userId || (!email && !first_name && !image_url)) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const result = await onUpdateClerkUser(userId, { email, first_name, image_url });

    return NextResponse.json(result, { status: result.status });
  } catch (error:any) {
    console.error('Error updating user:', error);
    return NextResponse.json({ message: 'Error updating user', error: error.message }, { status: 500 });
  }
}
