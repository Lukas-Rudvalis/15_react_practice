import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({
  token: null,
  login(userToken, userEmail) {},
  logout() {},
  isLoggedIn: false,
  email: null,
});

const localEmailKey = 'LOCAL_EMAIL';
const localTokenKey = 'LOCAL_TOKEN';

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem(localTokenKey) || '');
  const [email, setEmail] = useState(localStorage.getItem(localEmailKey) || '');

  // const isLoggedIn = token === '' ? false : true;
  // const isLoggedIn = token ? true : false;
  const isLoggedIn = !!token;

  function login(userToken, userEmail) {
    setToken(userToken);
    setEmail(userEmail);
    localStorage.setItem(localTokenKey, userToken);
    localStorage.setItem(localEmailKey, userEmail);
  }
  function logout() {
    // sukurti funkcija logout
    // nustato token ir email i ''
    setToken('');
    setEmail('');
    localStorage.removeItem(localTokenKey);
    localStorage.removeItem(localEmailKey);
  }
  // perduodam logout i authCtx
  // panaudojam logout Hederyje paspaudus logout mygtuka

  const authCtx = {
    token,
    email,
    login,
    logout,
    isLoggedIn,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default AuthProvider;

// custon useAuthCtx hook 2 lvl burtas
export function useAuthContext() {
  const ctx = useContext(AuthContext);
  return ctx;
}
