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

ContactsListItem.propTypes = {};

export default ContactsListItem;
