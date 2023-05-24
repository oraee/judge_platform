import { useMutation } from "@tanstack/react-query";
import { login as loginRequest } from "../pages/login/api";
import { PropsWithChildren, createContext, useContext, useState } from "react";

export type User = {
  username: string;
  role: string;
  firstName: string;
  lastName: string;
  token: string;
};

export type Auth = {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
  isLogged: boolean;
};

const AuthContext = createContext<Auth | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const loginMutation = useMutation(loginRequest, {
    onSuccess: (data) => {
      setUser(data);

      localStorage.setItem("token", data.token);
    },
  });

  const login = (username: string, password: string) => {
    loginMutation.mutate({
      username,
      password,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const isLogged = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("error");
  }

  return value;
};
