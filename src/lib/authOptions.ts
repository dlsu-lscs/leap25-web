import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthOptions } from 'next-auth';
import { GetGoogleLogin } from '@/services/googleLoginService';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'CustomTokenAuth',
      credentials: {
        token: { label: 'Token', type: 'text' },
      },
      async authorize(credentials) {
        if (credentials?.token) {
          return {
            id: 'user',
            token: credentials.token,
          };
        }
        return null;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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

    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.provider = token.provider;
      return session;
    },
  },
};
