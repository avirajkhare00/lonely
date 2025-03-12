import { NextResponse } from 'next/server';

export async function GET() {
  // Generate a random number between 1 and 1000
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  
  // Return the random number as JSON
  return NextResponse.json({ number: randomNumber });
}
