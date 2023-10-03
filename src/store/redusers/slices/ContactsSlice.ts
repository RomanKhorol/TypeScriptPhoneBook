import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Icontact } from "../../../models/Icontact";
import {
  fetchContactsAction,
  addContactAction,
  deleteContactAction,
} from "../actioncreators/ContactsActionCreator";

interface ContactsState {
  contacts: Icontact[];
  isLoading: boolean;
  error: string;
}
const initialState: ContactsState = {
  contacts: [],
  isLoading: false,
  error: "",
};
export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: {
    // Fecth Contact
    [fetchContactsAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchContactsAction.fulfilled.type]: (
      state,
      action: PayloadAction<Icontact[]>
    ) => {
      state.contacts = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [fetchContactsAction.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Add Contact
    [addContactAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addContactAction.fulfilled.type]: (
      state,
      action: PayloadAction<Icontact>
    ) => {
      state.contacts.push(action.payload);
      state.isLoading = false;
      state.error = "";
    },
    [addContactAction.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // delete contact
    [deleteContactAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteContactAction.fulfilled.type]: (state, { payload }) => {
      state.contacts = state.contacts.filter((item) => item.id !== payload.id);
      state.isLoading = false;
      state.error = "";
    },
    [deleteContactAction.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export default contactsSlice.reducer;
