import { ReactNode } from "react";

export interface User {
  user: {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
  }
  auth: boolean;
  token?: string;
}

export interface SignInRequestData {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  signIn: (data: SignInRequestData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface AuthContexProviderProps {
  children: ReactNode;
}