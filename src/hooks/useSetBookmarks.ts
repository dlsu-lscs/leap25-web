import { getBookmarks } from '@/services/bookmarkService';
import { bookmarkModel } from '@/types/classModels';
import { fetchData } from 'next-auth/client/_utils';
import { useEffect, useState } from 'react';

const useSetBookmark = (userId: number | undefined) => {
  const [bookmarks, setBookmarks] = useState<bookmarkModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const bookmark = await getBookmarks(userId, process.env.NEXT_PUBLIC_LEAP_API);

      setBookmarks(bookmark);
    };
    if (userId) fetchData();
  }, [userId]);
  return { bookmarks, setBookmarks };
};

export { useSetBookmark };
