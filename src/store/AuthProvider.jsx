import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  token: null,
  login(userToken, userEmail) {},
  logout() {},
  isLoggedIn: false,
});

function AuthProvider({ children }) {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  function login(userToken, userEmail) {
    setToken(userToken);
    setEmail(userEmail);
  }

  const authCtx = {
    token,
    email,
    login,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

// custon useAuthCtx hook 2 lvl burtas
export function useAuthContext() {
  const ctx = useContext(AuthContext);
  return ctx;
}
