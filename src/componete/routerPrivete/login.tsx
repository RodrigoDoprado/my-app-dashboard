import { useAuth } from "../../context/authProvider/useAuth"
import DashboardIndex from "../../pages";

export const LogPrivete = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()

  if (auth.token) return <DashboardIndex/>
    
  return children;
}