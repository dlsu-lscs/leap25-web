'use client';

import { useEffect } from 'react';

interface RecentlyViewedProps {
  classID: number;
  maxItems?: number;
}

export default function RecentlyViewed({ classID, maxItems = 8 }: RecentlyViewedProps) {
  useEffect(() => {
    if (!classID) return;

    const key = 'recentlyViewedClasses';
    const stored = localStorage.getItem(key);

    let viewed: number[] = [];

    try {
      const parsed = JSON.parse(stored || '[]');
      viewed = Array.isArray(parsed) ? parsed.map(Number) : [];
    } catch {
      viewed = [];
    }

    const uniqueSet = new Set(viewed.filter((id) => id != classID));

    uniqueSet.add(classID);

    const updated = [classID, ...Array.from(uniqueSet).filter((id) => id != classID)];

    const limited = updated.slice(0, maxItems);

    localStorage.setItem(key, JSON.stringify(limited));
  }, [classID, maxItems]);

  return null;
}
