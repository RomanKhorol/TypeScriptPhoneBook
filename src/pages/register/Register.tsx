import { FC } from "react";
import { useState } from "react";

import { register } from "../../store/redusers/actioncreators/AuthActionCreator";
import { useAppDispatch } from "../../hooks/redux";

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
      <h1>Register page</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label>
            Name
            <input
              type="name"
              name="name"
              value={name}
              onChange={handlChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handlChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlChange}
            />
          </label>
        </div>

        <button type="submit">Aply</button>
      </form>
    </div>
  );
};
export default RegisterForm;
