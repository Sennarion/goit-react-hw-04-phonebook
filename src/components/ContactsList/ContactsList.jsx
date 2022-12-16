import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { List } from './ContactsList.styled';

function ContactsList({ contacts }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} name={name} number={number} />
      ))}
    </List>
  );
}

ContactsList.propTypes = {};

export default ContactsList;
