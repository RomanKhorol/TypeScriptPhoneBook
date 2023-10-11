import { Formik, Form, Field, FormikHelpers } from "formik";

import { addContactAction } from "../../store/redusers/actioncreators/ContactsActionCreator";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FC } from "react";
import { InputList, Label, Button } from "./AddAbonentForm.styled";
import styled from "styled-components";

const Input = styled(Field)`
  margin-left: auto;
  outline: none;
  border-color: #a9a9a9;
  border-radius: 4px;
  :focus {
    border-color: #4169e1;
    box-shadow: 1px 1px 2px 0 #4169e1;
  }
`;

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
          <InputList>
            <li>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </li>
            <li>
              <Label htmlFor="number">Number</Label>
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </li>
          </InputList>

          <Button type="submit">Add contact</Button>
        </Form>
      </div>
    </Formik>
  );
};
