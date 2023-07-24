import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  ContactsForm,
  ContactsLabel,
  ContactName,
  ContactNumber,
  ContactInput,
  AddBtn,
} from './ContactFormStyled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const onInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactData = {
      name: formData.name,
      number: formData.number,
    };
    onAddContact(contactData);
    setFormData(INITIAL_STATE);
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <ContactsLabel>
        <ContactName>Name</ContactName>
        <ContactInput
          value={formData.name}
          onChange={onInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([\\' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactsLabel>
      <ContactsLabel>
        <ContactNumber>Number</ContactNumber>
        <ContactInput
          value={formData.number}
          onChange={onInputChange}
          type="tel"
          name="number"
          pattern="\\+?\\d{1,4}?[-\\.\\s]?\\(\\d{1,3}\\)?[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactsLabel>
      <AddBtn type="submit">Add contact</AddBtn>
    </ContactsForm>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};