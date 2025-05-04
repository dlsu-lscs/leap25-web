import { API_URL } from '@/lib/constants';
import axios from 'axios';

const GetGoogleLogin = async (token: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/google`,
      { token: token },
      {
        headers: {
          //   Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      }
    );
    console.log(response);
  } catch (error: any) {
    console.log('error: ' + error);
  }
};

export default GetGoogleLogin;
