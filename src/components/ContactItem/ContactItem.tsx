import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { Icontact } from "../../models/Icontact";
import { deleteContactAction } from "../../store/redusers/actioncreators/ContactsActionCreator";

interface ContactItemProps {
  contact: Icontact;
}

const ContactItem: FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const clickHendler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteContactAction(contact.id));
  };

  return (
    <li>
      <span>{contact.name}:</span>
      <span>{contact.phone}</span>
      <button onClick={clickHendler}>Delete</button>
    </li>
  );
};
export default ContactItem;
