import { useEffect, useState } from 'react';
import { decodeJWT } from '@/lib/decodeJWT';

export const useDecodeJWT = (jwt: string) => {
  const [decodedJWT, setDecodedJWT] = useState<any>({});
  useEffect(() => {
    const decoded = decodeJWT(jwt);
    setDecodedJWT(decoded || {});
  }, []);
  return decodedJWT;
};
