import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

import { FC } from "react";

type privateRouteProps = {
  component: React.ComponentType;
  redirectTo: string;
};
export const PrivateRoute: FC<privateRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn = useAppSelector((state) => state.ayth.isLoggedIn);
  const isSteelRefreshing = useAppSelector((state) => state.ayth.isRefreshing);
  const shouldRedirect = !isLoggedIn && !isSteelRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
