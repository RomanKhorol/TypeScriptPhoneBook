import { FC } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import UserMenu from "../UserMenu/UserMenu";
import { useAppSelector } from "../../hooks/redux";

const SharedLayout: FC = () => {
  const isLoggedIn = useAppSelector((state) => state.ayth.isLoggedIn);
  return (
    <div>
      <header>
        <div>
          {!isLoggedIn && <b>Welcome to phonebook</b>}
          {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
          {!isLoggedIn && <h3>or</h3>}
          {!isLoggedIn && <NavLink to="/login">Login</NavLink>}

          {isLoggedIn && <UserMenu />}
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
