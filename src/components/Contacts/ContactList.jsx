import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsItems,
  ContactInfo,
  DeleteBtn,
} from './ContactListStyled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, number, name }) => {
        return (
          <ContactsItems key={id}>
            <ContactInfo>
              {name}: {number}
            </ContactInfo>
            <DeleteBtn
              type="button"
              name="delete"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </DeleteBtn>
          </ContactsItems>
        );
      })}
    </ContactsList>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
