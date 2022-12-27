import PropTypes from 'prop-types';
import { ContactsListItem, SubTitle } from 'components';
import { List } from './ContactsList.styled';

function ContactsList({ contacts, deleteContact, showUpdateForm }) {
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
            showUpdateForm={showUpdateForm}
          />
        ))}
      </List>
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  deleteContact: PropTypes.func.isRequired,
  showUpdateForm: PropTypes.func.isRequired,
};

export default ContactsList;
