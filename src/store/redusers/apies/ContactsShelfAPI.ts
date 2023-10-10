import axios from "axios";
import { Icontact } from "../../../models/Icontact";
import { AddContactType } from "../../../models/addContactTypes";
axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export async function fetchContacts() {
  const response = await axios.get<Icontact[]>("contacts");
  return response.data;
}
export async function addContact(data: AddContactType) {
  const response = await axios.post("contacts", data);
  return response.data;
}

export async function deleteContact(id: string) {
  const response = await axios.delete(`contacts/${id}`);
  return response.data;
}
