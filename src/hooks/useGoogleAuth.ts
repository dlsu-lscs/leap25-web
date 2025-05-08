import { useGoogleLogin } from '@react-oauth/google';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useState } from 'react';
import GetGoogleLogin from '@/services/googleLoginServce';

const useGoogleAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [, setCookie] = useCookies(['currentUser']);

  const login = useGoogleLogin({
    onSuccess: async (response: any) => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
              Accept: 'application/json',
            },
          }
        );
        setUser(res.data);
        const jwtToken = await GetGoogleLogin(response.access_token);
        setCookie('currentUser', jwtToken, { path: '/' });
      } catch (e: any) {
        setError(e.message || 'Error logging in');
      } finally {
        setLoading(false);
      }
    },
    onError: (error: any) => {
      setError(error.message || 'Login failed');
      setLoading(false);
    },
  });

  return { user, loading, error, login };
};

export default useGoogleAuth;
