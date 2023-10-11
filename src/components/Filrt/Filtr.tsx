import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { setFilter } from "../../store/redusers/slices/FilerSlice";
import { FitrWrap, FitrTitle, FitrInput } from "./Filtr.styled";

const Filter: FC = () => {
  const dispatch = useAppDispatch();

  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FitrWrap>
      <FitrTitle>Find contact by name</FitrTitle>

      <FitrInput type="text" onChange={changeFilter} placeholder="Enter name" />
    </FitrWrap>
  );
};
export default Filter;
