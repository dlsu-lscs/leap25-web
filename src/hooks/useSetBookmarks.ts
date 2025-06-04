import { API_URL } from '@/lib/constants';
import { getBookmarks } from '@/services/bookmarkService';
import { bookmarkModel } from '@/types/classModels';
import { useEffect, useState, useCallback } from 'react';

const useSetBookmark = (userId: number | undefined) => {
  const [bookmarks, setBookmarks] = useState<bookmarkModel[]>([]);

  const fetchData = useCallback(async () => {
    if (!userId) {
      setBookmarks([]);
      return;
    }

    try {
      const bookmark = await getBookmarks(userId, API_URL);
      setBookmarks(bookmark);
    } catch (error) {
      console.error('Failed to fetch bookmarks:', error);
    }
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { bookmarks, refreshBookmarks: fetchData };
};

export { useSetBookmark };
