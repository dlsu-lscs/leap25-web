import { getSubThemeByID } from '@/services/subthemeService';
import { subThemeModel } from '@/types/classModels';
import { useEffect, useState } from 'react';

const useSetSubtheme = (subtheme_id: any) => {
  const [subtheme, setSubtheme] = useState<subThemeModel>();

  useEffect(() => {
    const fetchData = async () => {
      if (subtheme_id) {
        const subtheme = await getSubThemeByID(subtheme_id);
        setSubtheme(subtheme);
      }
    };
    fetchData();
  }, [subtheme_id]);

  return { subtheme };
};

export { useSetSubtheme };
