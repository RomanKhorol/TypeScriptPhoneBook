import Filter from "../../components/Filrt/Filtr";
import ContactsList from "../../components/ContactList/ContactList";
import { AddForm } from "../../components/AddAbonentForm/AddAbonentForm";
import { FC } from "react";

const Contacts: FC = () => {
  return (
    <>
      <div
        style={{
          width: "300px",
          border: "1px solid black",
          borderRadius: "4px",
        }}
      >
        <h1
          style={{
            paddingLeft: "40px",
            fontSize: "30px",
            margin: "0px",
          }}
        >
          Add new contact
        </h1>
        <AddForm />
      </div>
      <h2
        style={{
          margin: "0",
          paddingLeft: "40px",
          padding: "40px",
          fontSize: 40,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactsList />
    </>
  );
};
export default Contacts;
