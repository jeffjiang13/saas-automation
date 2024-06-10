import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function GET(req: NextRequest): Promise<Response> {
  return new Promise((resolve) => {
    exec('ngrok start --none --log=stdout --authtoken=$NGROK_AUTHTOKEN', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`);
        resolve(NextResponse.json({ error: 'Failed to start ngrok', details: stderr }, { status: 500 }));
      } else {
        resolve(NextResponse.json({ url: stdout.trim() }));
      }
    });
  });
}
