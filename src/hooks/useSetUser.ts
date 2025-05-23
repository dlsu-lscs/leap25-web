import { getUserByEmail } from '@/services/userService';
import { userModel } from '@/types/userModels';
import { useEffect, useState } from 'react';

const useSetUser = (session: any) => {
  const [user, setUser] = useState<userModel>();

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserByEmail(session?.user?.email, process.env.NEXT_PUBLIC_LEAP_API);
      setUser(user);
    };
    fetchData();
  }, [session]);

  return { user };
};

export { useSetUser };
