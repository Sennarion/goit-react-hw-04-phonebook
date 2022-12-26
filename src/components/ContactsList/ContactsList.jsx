import PropTypes from 'prop-types';
import { ContactsListItem, SubTitle } from 'components';
import { List } from './ContactsList.styled';

function ContactsList({ contacts, deleteContact }) {
  return (
    <>
      <SubTitle>Contacts</SubTitle>
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
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ContactsList;
