'use client';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function useGoogleAuthRedirect() {
  const [cookie] = useCookies(['currentUser']);

  useEffect(() => {
    if (!('currentUser' in cookie)) {
      window.location.replace('/login');
    }
  }, [cookie['currentUser']]);
}
