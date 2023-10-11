import { FC } from "react";
import { useEffect } from "react";
import getFilteredContacts from "../../helpers/VisibleItems";
import ContactItem from "../ContactItem/ContactItem";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchContactsAction } from "../../store/redusers/actioncreators/ContactsActionCreator";
import { AbonentListUl } from "./ContactList.styled";
const ContactsList: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  const { contacts, error, isLoading } = useAppSelector(
    (state) => state.contacts
  );
  const filterValue = useAppSelector((state) => state.filter);
  let filteredContacts = getFilteredContacts(contacts, filterValue);

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <div>
          <AbonentListUl>
            {filteredContacts.map((contact) => {
              return <ContactItem key={contact.id} contact={contact} />;
            })}
          </AbonentListUl>
        </div>
      )}
    </>
  );
};
export default ContactsList;
