import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import contactsReduser from "./redusers/slices/ContactsSlice";
import filterReduser from "../store/redusers/slices/FilerSlice";
import { authSliceConfigReducer } from "../store/redusers/slices/AuthSlice";

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
  auth: authSliceConfigReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};
export const store = setupStore();
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
