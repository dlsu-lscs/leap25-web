'use client';
import useGoogleAuthRedirect from '@/hooks/useGoogleAuthRedirect';
import SubThemeMapPicker from '@/features/MapSubTheme/DesktopMapSubTheme/SubThemeMapPicker';
import MobileMapClientWrapper from '@/features/MapSubTheme/mapClientWrapper';

export default function Map() {
  useGoogleAuthRedirect();
  return (
    <>
      <div className="sm:hidden w-full h-full">
        <MobileMapClientWrapper></MobileMapClientWrapper>
      </div>

      <div className="sm:block w-full h-full hidden">
        <SubThemeMapPicker></SubThemeMapPicker>
      </div>
    </>
  );
}
