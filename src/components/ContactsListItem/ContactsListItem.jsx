import PropTypes from 'prop-types';
import { ListItem } from './ContactsListItem.styled';
import { Text } from './ContactsListItem.styled';
import { theme } from '../../styles/theme';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';

function ContactsListItem({ id, name, number, deleteContact }) {
  return (
    <ListItem>
      <Text>
        <FaUserAlt color={theme.colors.accent} size={theme.spacing(8)} />
        {name}
      </Text>
      <Text>
        <FaPhoneAlt color={theme.colors.accent} size={theme.spacing(8)} />
        {number}
      </Text>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </ListItem>
  );
}

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
