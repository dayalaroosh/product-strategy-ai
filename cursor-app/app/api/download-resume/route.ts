import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // Serve the static PDF file directly
    const pdfPath = join(process.cwd(), 'public', 'Aroosh_Dayal_Resume.pdf');
    const pdfBuffer = readFileSync(pdfPath);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Aroosh_Dayal_Resume.pdf"',
        'Content-Length': pdfBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error serving PDF resume:', error);
    
    // Fallback - redirect to contact
    return NextResponse.redirect('mailto:dayalaroosh@gmail.com?subject=Resume Request&body=Hi Aroosh, I\'d like to request your latest resume.');
  }
} 