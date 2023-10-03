import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsShelfAPI from "../apies/ContactsShelfAPI";
import { Icontact } from "../../../models/Icontact";

export const fetchContactsAction = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsShelfAPI.fetchContacts();
      return contacts;
    } catch (error) {
      let e = error as Error;
      return rejectWithValue(e.message);
    }
  }
);
export const addContactAction = createAsyncThunk(
  "contacts/addContacts",
  async (data: Icontact, { rejectWithValue }) => {
    try {
      const response = await contactsShelfAPI.addContact(data);

      return response;
    } catch (error) {
      let e = error as Error;
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContactAction = createAsyncThunk(
  "contacts/deleteContacts",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await contactsShelfAPI.deleteContact(id);
      return response;
    } catch (error) {
      let e = error as Error;
      return rejectWithValue(e.message);
    }
  }
);
