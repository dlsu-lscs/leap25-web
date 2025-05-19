import { CLIENT_API_URL } from '@/lib/constants';
import axios from 'axios';

const GetGoogleLogin = async (token: string) => {
  try {
    const response = await axios.post(
      `${CLIENT_API_URL}/auth/google`,
      { token: token },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.log('error: ' + error);
  }
};

const SetGoogleLogin = async (jwtToken: string) => {
  await fetch('/api/set-auth-cookie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: jwtToken }),
  });
};

export { GetGoogleLogin, SetGoogleLogin };
