import type { NextApiRequest, NextApiResponse } from 'next';
import ngrok from 'ngrok';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = await ngrok.connect({
      authtoken: process.env.NGROK_AUTHTOKEN,
      addr: 'http://localhost:3000', // Keep this as is for local dev
      subdomain: 'neat-decent-mongrel'
    });

    res.status(200).json({ url });
  } catch (error) {
    res.status(500).json({ error: 'Failed to start ngrok' });
  }
}
