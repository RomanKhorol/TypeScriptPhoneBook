import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./redusers/slices/ContactsSlice";
import filterReduser from "../store/redusers/slices/FilerSlice";
import authReduser from "../store/redusers/slices/AuthSlice";

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
  ayth: authReduser,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
  });
};
export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
