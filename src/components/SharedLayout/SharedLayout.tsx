import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import UserMenu from "../UserMenu/UserMenu";
import { useAppSelector } from "../../hooks/redux";
import { LinkDivWraper, LinkNav, WardOr } from "./SharedLayout.styled";

const SharedLayout: FC = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return (
    <div
      style={{
        height: "100%",
        padding: "15px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <header>
        <LinkDivWraper>
          {!isLoggedIn && <b>Welcome to phonebook</b>}
          {!isLoggedIn && <LinkNav to="/register">Register</LinkNav>}
          {!isLoggedIn && <WardOr>or</WardOr>}
          {!isLoggedIn && <LinkNav to="/login">Login</LinkNav>}

          {isLoggedIn && <UserMenu />}
        </LinkDivWraper>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
