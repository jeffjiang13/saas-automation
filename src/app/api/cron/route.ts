import { NextRequest, NextResponse } from 'next/server';
import ngrok from 'ngrok';

export async function GET(req: NextRequest) {
  try {
    const url = await ngrok.connect({
      authtoken: process.env.NGROK_AUTHTOKEN,
      addr: 'http://localhost:3000',
      subdomain: 'neat-decent-mongrel'
    });

    return NextResponse.json({ url });
  } catch (error) {
    console.error('Failed to start ngrok:', error);
    return NextResponse.json({ error: 'Failed to start ngrok' }, { status: 500 });
  }
}
