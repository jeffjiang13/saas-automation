import { exec } from 'child_process';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return new Promise((resolve) => {
    exec('ngrok start --config=ngrok.yml', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        resolve(NextResponse.json({ error: 'Failed to start ngrok', details: error.message }, { status: 500 }));
      } else {
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        resolve(NextResponse.json({ message: 'ngrok started successfully', details: stdout }));
      }
    });
  });
}
