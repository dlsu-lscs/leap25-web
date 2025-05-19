// /app/api/set-auth-cookie/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const { token } = await req.json();

  (await cookies()).set('c_user', token, {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  });

  return NextResponse.json({ success: true });
}
