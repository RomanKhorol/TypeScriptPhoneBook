import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../store/redusers/actioncreators/AuthActionCreator";
import { Button } from "./UserMenu.styled";

const UserMenu: FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.auth.user.name);
  const logOutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcome to your contacts, {name}</p>
      <Button type="button" onClick={logOutClick}>
        Logout
      </Button>
    </div>
  );
};
export default UserMenu;
