import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

interface IProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: IProps) => {
  const apiTokenInstance = useSelector((state: RootState) => state.auth.apiTokenInstance);

  if (!apiTokenInstance) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
