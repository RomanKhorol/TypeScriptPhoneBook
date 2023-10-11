import { FC } from "react";
import { useState } from "react";

import { register } from "../../store/redusers/actioncreators/AuthActionCreator";
import { useAppDispatch } from "../../hooks/redux";
import {
  LoginTitle,
  LoginFormWrapar,
  LabelLogin,
  LabelInput,
  Button,
} from "../login/Login.styled";

const RegisterForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();

  const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      case "name":
        return setName(value);
      default:
        return;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setEmail("");
    setPassword("");
    setName("");
  };
  return (
    <div>
      <LoginTitle>Register page</LoginTitle>
      <form onSubmit={handleSubmit} autoComplete="off">
        <LoginFormWrapar>
          <LabelLogin>
            Name
            <LabelInput
              type="name"
              name="name"
              value={name}
              onChange={handlChange}
            />
          </LabelLogin>
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

        <Button type="submit">Aply</Button>
      </form>
    </div>
  );
};
export default RegisterForm;
