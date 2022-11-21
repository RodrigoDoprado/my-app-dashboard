import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);
export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);
    const payload = {
      id: response.id,
      img: response.urlAvatar,
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
      token: response.token,
      menssage: response.menssage,
    };
    localStorage.setItem("user", JSON.stringify(payload));
    setUser(payload);
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
