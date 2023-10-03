import Filter from "../../components/Filrt/Filtr";
import ContactsList from "../../components/ContactList/ContactList";
import { FC } from "react";

const Contacts: FC = () => {
  return (
    <>
      <div>
        <h1>Add new contact</h1>
        <h1>Here will be AddForm</h1>
      </div>
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};
export default Contacts;
