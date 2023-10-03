import { Icontact } from "../models/Icontact";

const getFilteredContacts = (items: Icontact[], filterValue: string) => {
  const normalizedFilter = filterValue.toLowerCase();

  return items.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};
export default getFilteredContacts;
