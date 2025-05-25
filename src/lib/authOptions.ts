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
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        // After sign-in redirect
        if (url.includes('/api/auth/callback/google')) {
          return `${baseUrl}/auth/popup-close`;
        }
        // After sign-out redirect
        if (url.includes('/api/auth/signout')) {
          return `${baseUrl}/auth/popup-close`;
        }
        // default redirect for other URLs
        return url;
      }
      // fallback redirect to baseUrl
      return baseUrl;
    },
  },
};
