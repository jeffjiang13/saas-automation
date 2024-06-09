import type { NextApiRequest, NextApiResponse } from 'next';
import ngrok from 'ngrok';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('Handler invoked');
    const url = await ngrok.connect({
      authtoken: process.env.NGROK_AUTHTOKEN,
      addr: 'http://localhost:3000',  // Use HTTPS as your local server uses HTTPS
      subdomain: 'neat-decent-mongrel'
    });
    console.log('Ngrok URL:', url);
    res.status(200).json({ url });
  } catch (error) {
    console.error('Error starting ngrok:', error);
    res.status(500).json({ error: 'Failed to start ngrok' });
  }
}
