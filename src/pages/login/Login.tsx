import { useAppDispatch } from "../../hooks/redux";
import { useState } from "react";
import { login } from "../../store/redusers/actioncreators/AuthActionCreator";

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
      <h1>Login page</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
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

        <button type="submit">Enter</button>
      </form>
    </div>
  );
};
export default Login;
