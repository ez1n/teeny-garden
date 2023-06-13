import {createContext, useContext, useEffect, useState} from "react";
import {onUserStateChange} from "../../api/auth";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext);
}