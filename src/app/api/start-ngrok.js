// api/start-ngrok.js
import { NextResponse } from 'next/server';
import ngrok from 'ngrok';

export default async function handler(req, res) {
  const url = await ngrok.connect({
    authtoken: process.env.NGROK_AUTHTOKEN,
    addr: 'https://jj-zapflow.vercel.app',
    subdomain: 'neat-decent-mongrel'
  });

  res.status(200).json({ url });
}
