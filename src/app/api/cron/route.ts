import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<Response> {
  try {
    // Your logic here
    // For example, triggering some task, logging, etc.
    return NextResponse.json({ message: 'Cron job executed successfully' });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
