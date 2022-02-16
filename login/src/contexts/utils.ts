import { api } from "../services/api";
import { SignInRequestData, User } from "./types";


export const setUserLocalStorage = (user: User | null) => {

  localStorage.setItem("U_STRG", JSON.stringify(user));

}

export const getUserLocalStorage = () => {
  const json = localStorage.getItem("U_STRG");
 
  if(!json) {
    return null;
  }

  const user = JSON.parse(json);
  return user ?? null;
}

export const LoginRequest = async(data: SignInRequestData) => {
  try {
    const request = await api.post("/login", data);
    return request.data;
  } catch (error) {
    return null;
  }
}