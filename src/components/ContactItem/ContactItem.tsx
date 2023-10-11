import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { Icontact } from "../../models/Icontact";
import { deleteContactAction } from "../../store/redusers/actioncreators/ContactsActionCreator";
import {
  AbonentCard,
  AbonentText,
  AbonentDeleteBnt,
} from "./ContactItem.styled";
interface ContactItemProps {
  contact: Icontact;
}

const ContactItem: FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const clickHendler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteContactAction(contact.id));
  };

  return (
    <AbonentCard>
      <AbonentText>{contact.name}:</AbonentText>
      <AbonentText>{contact.number}</AbonentText>
      <AbonentDeleteBnt onClick={clickHendler}>Delete</AbonentDeleteBnt>
    </AbonentCard>
  );
};
export default ContactItem;
