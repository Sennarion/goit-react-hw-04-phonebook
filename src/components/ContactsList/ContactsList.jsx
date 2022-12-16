import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { List } from './ContactsList.styled';

function ContactsList({ contacts, deleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </List>
  );
}

ContactsList.propTypes = {};

export default ContactsList;
