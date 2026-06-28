import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
	const body = await request.json();
	
	// Forward the payload to your OPERIX Google Apps Script
	const response = await fetch('https://script.google.com/macros/s/AKfycby7xDEoYBzGM7sAAAkX0LDTKNHo63LjbgmaC-0VLXESPFj7BSl10GE-sIqM-Ss3wE8/exec', {
	  method: 'POST',
	  mode: 'no-cors',
	  headers: { 'Content-Type': 'text/plain' },
	  body: JSON.stringify(body)
	});

	return NextResponse.json({ success: true, message: 'Dispatched successfully' });
  } catch (error) {
	console.error('API Route Error:', error);
	return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 });
  }
}