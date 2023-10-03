import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { setFilter } from "../../store/redusers/slices/FilerSlice";

const Filter: FC = () => {
  const dispatch = useAppDispatch();

  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <h2>Find contact by name</h2>

      <input type="text" onChange={changeFilter} placeholder="Enter name" />
    </div>
  );
};
export default Filter;
