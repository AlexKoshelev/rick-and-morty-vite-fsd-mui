import { createContext, useContext, useState } from "react";

interface AuthProps {
  children?: React.ReactNode;
}
interface AuthData {
  email: string | null;
  password: string | null;
}
type Signin = (a: AuthData, b: () => void) => void;
type Sigout = (b: () => void) => void;
interface AuthParams {
  user: AuthData;
  signin: Signin;
  signout: Sigout;
}
const AuthContext = createContext<AuthParams>({
  user: { email: "", password: "" },
  signin: () => {},
  signout: () => {},
});
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }: AuthProps) {
  const [user, setUser] = useState<AuthData>(() => ({
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
  }));
  function signin(newUser: AuthData, callback: () => void) {
    setUser(newUser);
    if (newUser.email && newUser.password) {
      localStorage.setItem("email", newUser.email);
      localStorage.setItem("password", newUser.password);
      callback();
    }
  }
  function signout(callback: () => void) {
    setUser({
      email: "",
      password: "",
    });
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    callback();
  }
  const value: AuthParams = {
    user,
    signin,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
