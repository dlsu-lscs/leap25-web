import { API_URL, API_SECRET } from '@/lib/constants';
import axios from 'axios';

const GetGoogleLogin = async (token: any) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/google`,
      { token: token },
      {
        headers: {
          Authorization: `Bearer ${API_SECRET}`,
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.log('error: ' + error);
  }
};

export { GetGoogleLogin };
