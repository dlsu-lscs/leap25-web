import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthOptions } from 'next-auth';
import { GetGoogleLogin } from '@/services/googleLoginService';

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID! || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET! || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: 'jwt',
  },
  
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === 'google') {
        const jwtToken = await GetGoogleLogin(account.access_token);
        token.accessToken = jwtToken;
        token.provider = 'google';
      }

      return token;
    },
    async redirect() {
      return `${process.env.NEXTAUTH_URL}/auth/popup-close`;
    },
  },
};
