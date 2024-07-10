import { TUserRole } from "@/constant/constant.global";
import VerifyToken from "@/lib/VerifyToken";
import { logOut, selectCurrentToken } from "@/redux/features/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TJwtPayload } from "@/redux/types/types.global";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface TProtectedRoute {
  children: ReactNode;
  role: TUserRole[];
}

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const dispatch = useAppDispatch();
  const token: string | null = useAppSelector(selectCurrentToken);

  if (!token) {
    return <Navigate to={"/login"} replace />;
  }
  const decoded: TJwtPayload = VerifyToken(token) as TJwtPayload;

  if (!decoded) {
    return <Navigate to={"/login"} replace />;
  }

  if (role.length && !role.includes(decoded?.role)) {
    dispatch(logOut());
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default ProtectedRoute;
