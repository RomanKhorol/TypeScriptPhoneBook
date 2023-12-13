import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsShelfAPI from "../apies/ContactsShelfAPI";
import { AddContactType } from "../../../models/addContactTypes";
import { Icontact } from "../../../models/Icontact";

export const fetchContactsAction = createAsyncThunk<
  Icontact[],
  undefined,
  { rejectValue: string }
>("contacts/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const contacts = await contactsShelfAPI.fetchContacts();
    return contacts;
  } catch (error) {
    let e = error as Error;
    return rejectWithValue(e.message);
  }
});

export const addContactAction = createAsyncThunk<
  Icontact,
  AddContactType,
  { rejectValue: string }
>("contacts/addContacts", async (data, { rejectWithValue }) => {
  try {
    const response = await contactsShelfAPI.addContact(data);

    return response;
  } catch (error) {
    let e = error as Error;
    return rejectWithValue(e.message);
  }
});

export const deleteContactAction = createAsyncThunk<
  Icontact,
  string,
  { rejectValue: string }
>("contacts/deleteContacts", async (id, { rejectWithValue }) => {
  try {
    const response = await contactsShelfAPI.deleteContact(id);

    return response;
  } catch (error) {
    let e = error as Error;
    return rejectWithValue(e.message);
  }
});
