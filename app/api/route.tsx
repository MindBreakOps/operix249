import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
	// 1. Parse the incoming JSON from your frontend page
	const data = await request.json(); 
	
	// 2. Format the email text exactly how OPERIX used to do it
	const emailText = `NEW CONTACT LEAD\n\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nPhone: ${data.phone}\nProject Type: ${data.projectType}\nMessage: ${data.message || 'No message provided.'}`;
	
	// 3. Create the strict payload structure your Google Script requires
	const googlePayload = {
	  action: 'sendEmail',
	  to: 'info@operix-solutions.com',
	  subject: `New Lead: ${data.company || data.name}`,
	  body: emailText
	};

	// 4. Send it to Google
	await fetch('https://script.google.com/macros/s/AKfycby7xDEoYBzGM7sAAAkX0LDTKNHo63LjbgmaC-0VLXESPFj7BSl10GE-sIqM-Ss3wE8/exec', {
	  method: 'POST',
	  mode: 'no-cors',
	  headers: { 'Content-Type': 'text/plain' },
	  body: JSON.stringify(googlePayload)
	});

	return NextResponse.json({ success: true, message: 'Dispatched successfully' });
  } catch (error) {
	console.error('GAS API Route Error:', error);
	return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 });
  }
}