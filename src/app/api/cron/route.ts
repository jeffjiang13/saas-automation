import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET(req: NextRequest): Promise<Response> {
  try {
    // Start ngrok
    await execAsync('ngrok start --all --config=ngrok.yml');
    console.log('Ngrok started');

    // Your logic here, for example, triggering some task
    // You can also include logic to stop ngrok after the task is done if needed

    return NextResponse.json({ message: 'Cron job executed successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
