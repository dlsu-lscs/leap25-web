import { getBookmarks } from '@/services/bookmarkService';
import { bookmarkModel } from '@/types/classModels';
import { fetchData } from 'next-auth/client/_utils';
import { useEffect, useState } from 'react';

const useSetBookmark = (userId: number | undefined) => {
  const [bookmarks, setBookmarks] = useState<bookmarkModel[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchData = async () => {
      if (userId) {
        const bookmark = await getBookmarks(userId, process.env.NEXT_PUBLIC_LEAP_API);
        setBookmarks(bookmark);
      }
    };

    if (userId) {
      fetchData();
      interval = setInterval(fetchData, 500);
    }

    return () => clearInterval(interval);
  }, [userId]);
  return { bookmarks, setBookmarks };
};

export { useSetBookmark };
