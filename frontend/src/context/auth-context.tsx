import { endSession, getSessionInfo } from '@/users/user.api';
import { useState, useContext, createContext, useEffect } from 'react';

type AuthCtxType = {
  username: string | null;
  id: number | null;
  login: (username: string, id: number) => void;
  logout: () => void;
};

type User = {
  username: string | null;
  id: number | null;
};

const AuthCtx = createContext<AuthCtxType | null>(null);
export const useAuthCtx = () => useContext(AuthCtx)!;

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>({ username: null, id: null });
  const login = (username: string, id: number) => {
    setUser({
      username,
      id,
    });
  };
  useEffect(() => {
    async function loadSession() {
      console.log('attempting to get session info');
      const info = await getSessionInfo();
      console.log('retrieved session info', info);
      login(info.username, info.id);
    }
    if (user.username === null) {
      console.log('user before', user);
      loadSession();
    }
    console.log('session load attempt');
  }, [user]);
  async function logout() {
    await endSession();
    setUser({
      username: null,
      id: null,
    });
  }

  return (
    <AuthCtx.Provider
      value={{ username: user.username, id: user.id, login, logout }}
    >
      {children}
    </AuthCtx.Provider>
  );
}
