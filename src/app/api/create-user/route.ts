import { NextResponse } from 'next/server';
import { onCompleteUserRegistration } from '../../services/clerkService';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, first_name, image_url } = body;
    if (!email || !first_name) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    const user = await onCompleteUserRegistration({ email, first_name, image_url });

    return NextResponse.json({ message: 'User created successfully', user }, { status: 200 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ message: 'Error creating user', error }, { status: 500 });
  }
}
