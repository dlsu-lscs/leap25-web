'use client';
import { useEffect, useState } from 'react';

export default function PopupClose() {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // This communicates the authentication result back to the opener window
    if (window.opener) {
      setClosing(true);

      // Send a message to the parent window that authentication is complete
      window.opener.postMessage('authentication-complete', window.location.origin);

      // Close this popup window with a slight delay to ensure the message is sent
      setTimeout(() => {
        window.close();
      }, 500);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f8f9fa] text-[#333]">
      <div className="p-8 rounded-lg shadow-md bg-white text-center max-w-md">
        <h2 className="text-xl font-semibold mb-4">Authentication Complete</h2>
        {closing ? (
          <>
            <p>Successfully signed in!</p>
            <p className="text-sm text-gray-500 mt-2">This window will close automatically...</p>
          </>
        ) : (
          <p>Processing your authentication...</p>
        )}
      </div>
    </div>
  );
}
