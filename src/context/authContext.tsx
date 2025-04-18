import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function getAuthContext() {
  return useContext(AuthContext);
}

import { ReactNode } from 'react';

export default function AuthContextComponent({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
