import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../store/redusers/actioncreators/AuthActionCreator";

const UserMenu: FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.auth.user.name);
  const logOutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcome to your contacts, {name}</p>
      <button type="button" onClick={logOutClick}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
