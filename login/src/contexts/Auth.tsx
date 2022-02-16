import{ createContext, useEffect, useState } from "react";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./utils";
import { AuthContexProviderProps, AuthContextType, SignInRequestData, User } from "./types";

export const authContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = (props: AuthContexProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user: User = getUserLocalStorage();
    if(user?.token) {
      setUser(user);
    }
  }, [])

  const isAuthenticated = !!user?.auth;

  async function signIn ({email, password}: SignInRequestData) {

      const response = await LoginRequest({email, password});
  
      const payload = {user: response.user,  token: response.token, auth: response.auth }
      setUser(payload);
      setUserLocalStorage(payload);     
  }

  const logout = () => {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <authContext.Provider value={{user, signIn, logout, isAuthenticated}}>
        {props.children }
    </authContext.Provider>
  )
}