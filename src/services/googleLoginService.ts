import { API_URL } from '@/lib/constants';
import axios from 'axios';

const GetGoogleLogin = async (token: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/google`,
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

export default GetGoogleLogin;
