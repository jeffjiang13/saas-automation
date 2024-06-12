import { NextResponse } from 'next/server';
import { onCompleteUserRegistration } from '../../services/clerkService';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, first_name, image_url } = body;

    if (!email || !first_name) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const result = await onCompleteUserRegistration({ email, first_name, image_url });

    if (!result) {
      return NextResponse.json({ message: 'Error creating user, result is null or undefined' }, { status: 500 });
    }

    return NextResponse.json(result, { status: result.status });
  } catch (error:any) {
    console.error('Error creating user:', error);
    return NextResponse.json({ message: 'Error creating user', error: error.message }, { status: 500 });
  }
}
