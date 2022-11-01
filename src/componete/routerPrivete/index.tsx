import { useAuth } from "../../context/authProvider/useAuth"
import Login from "../../pages/auth/login";

export const RouterPrivete = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()

  if (!auth.token) return <Login/>
    
  return children;
}