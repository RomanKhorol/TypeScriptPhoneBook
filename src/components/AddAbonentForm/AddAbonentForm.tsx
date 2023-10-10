import { Formik, Form, Field, FormikHelpers } from "formik";

import { addContactAction } from "../../store/redusers/actioncreators/ContactsActionCreator";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FC } from "react";

interface initialValuesTypes {
  name: string;
  number: string;
}

const initialValues: initialValuesTypes = {
  name: "",
  number: "",
};

export const AddForm: FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector((state) => state.contacts.contacts);

  const hendleSubmit = (
    { name, number }: initialValuesTypes,
    { resetForm }: FormikHelpers<initialValuesTypes>
  ) => {
    const existContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existContact) {
      resetForm();
      return alert(`${name} is already in contacts`);
    } else dispatch(addContactAction({ name, number }));

    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
      <div>
        <Form autoComplete="off">
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </li>
            <li>
              <label htmlFor="number">Number</label>
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </li>
          </ul>

          <button type="submit">Add contact</button>
        </Form>
      </div>
    </Formik>
  );
};
