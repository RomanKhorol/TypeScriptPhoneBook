import { useAppDispatch } from "../../hooks/redux";
import { useState } from "react";
import { login } from "../../store/redusers/actioncreators/AuthActionCreator";
import {
  LoginFormWrapar,
  LoginTitle,
  LabelLogin,
  Button,
  LabelInput,
} from "./Login.styled";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPasswordl] = useState<string>("");
  const dispatch = useAppDispatch();

  const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPasswordl(value);
      default:
        return;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail("");
    setPasswordl("");
  };
  return (
    <div>
      <LoginTitle>Login page</LoginTitle>
      <form onSubmit={handleSubmit} autoComplete="off">
        <LoginFormWrapar>
          <LabelLogin>
            Email
            <LabelInput
              type="email"
              name="email"
              value={email}
              onChange={handlChange}
            />
          </LabelLogin>
          <LabelLogin>
            Password
            <LabelInput
              type="password"
              name="password"
              value={password}
              onChange={handlChange}
            />
          </LabelLogin>
        </LoginFormWrapar>

        <Button type="submit">Enter</Button>
      </form>
    </div>
  );
};
export default Login;
