import { getBookmarks } from '@/services/bookmarkService';
import { bookmarkModel } from '@/types/classModels';
import { useEffect, useState } from 'react';

const useSetBookmark = (userId: any) => {
  const [bookmarks, setBookmarks] = useState<bookmarkModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const bookmark = await getBookmarks(userId, process.env.NEXT_PUBLIC_LEAP_API);
      setBookmarks(bookmark);
    };
    fetchData();
  }, [userId]);
  return { bookmarks };
};

export { useSetBookmark };
