import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './Contacts/ContactList';
import { nanoid } from 'nanoid';
import {
  Container,
  PhonebookTitle,
  ContactsTitle,
} from './Container/ContainerStyled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from 'redux/contactsSlice';

export default function App() {
  const contacts = useSelector(state => {
    return state.contacts.contacts;
  });
  const filter = useSelector(state => {
    return state.contacts.filter;
  });
  const dispatch = useDispatch();

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
      dispatch(addContact(contact));
    }
  };
  const onFilter = filterContacts => {
    dispatch(setFilter(filterContacts));
  };
  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
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
