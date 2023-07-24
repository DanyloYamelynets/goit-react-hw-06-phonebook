import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './Contacts/ContactList';
import { nanoid } from 'nanoid';
import {
  Container,
  PhonebookTitle,
  ContactsTitle,
} from './Container/ContainerStyled';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringifiedContacts) || [];
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    if (!contacts.length) return;
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const onAddContact = contactData => {
    const { name } = contactData;
    const checkName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(),
        ...contactData,
      };
      setContacts([contact, ...contacts]);
    }
  };
  const onFilter = filterContacts => {
    setFilter(filterContacts);
  };
  const onDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onAddContact={onAddContact} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter
        filter={filter}
        onFilter={onFilter}
        title="Find contacts by name"
      />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </Container>
  );
}
