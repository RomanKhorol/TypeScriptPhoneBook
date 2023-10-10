import Filter from "../../components/Filrt/Filtr";
import ContactsList from "../../components/ContactList/ContactList";
import { AddForm } from "../../components/AddAbonentForm/AddAbonentForm";
import { FC } from "react";

const Contacts: FC = () => {
  return (
    <>
      <div>
        <h1>Add new contact</h1>
        <AddForm />
      </div>
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};
export default Contacts;
