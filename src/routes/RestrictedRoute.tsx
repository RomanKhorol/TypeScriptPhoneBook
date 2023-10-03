import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { FC } from "react";

type RestrictedRouteProps = {
  component: React.ComponentType;
  redirectTo: string;
};

export const RestrictedRoute: FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn = useAppSelector((state) => state.ayth.isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
