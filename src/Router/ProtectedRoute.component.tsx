import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { StoreState } from "store/store";

const ProtectedRoute = () => {
  const { isLoggedIn } = useSelector((state: StoreState) => state.userAuth);

  if (!isLoggedIn) return <Navigate to="auth/login" />;
  return <Outlet />;
};

export default ProtectedRoute;
