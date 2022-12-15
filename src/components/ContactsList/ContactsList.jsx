import PropTypes from 'prop-types';
function ContactsList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        );
      })}
    </ul>
  );
}
ContactsList.propTypes = {};
export default ContactsList;
