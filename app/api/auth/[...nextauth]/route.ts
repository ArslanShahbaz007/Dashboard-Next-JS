// app/api/auth/[...nextauth]/route.ts

import { authConfig } from '@/auth.config';
import NextAuth from 'next-auth';

const { auth } = NextAuth(authConfig);

export const GET = auth;
export const POST = auth;
