import { Route, Routes } from "react-router-dom";

import { lazy } from "react";
import { useEffect } from "react";
import { RestrictedRoute } from "../src/routes/RestrictedRoute";
import { PrivateRoute } from "../src/routes/PrivateRoute";
import SharedLayout from "../src/components/SharedLayout/SharedLayout";
import { useAppSelector, useAppDispatch } from "./hooks/redux";
import { fecthCurrentUser } from "./store/redusers/actioncreators/AuthActionCreator";
const RegisterForm = lazy(() => import("../src/pages/register/Register"));
const Login = lazy(() => import("../src/pages/login/Login"));
const Contacts = lazy(() => import("../src/pages/contacts/Contacts"));

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fecthCurrentUser());
  }, [dispatch]);
  const steelRefresing = useAppSelector((state) => state.auth.isRefreshing);

  return steelRefresing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterForm} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
}
