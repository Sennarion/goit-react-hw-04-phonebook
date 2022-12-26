import PropTypes from 'prop-types';
import { ListItem, Text } from './ContactsListItem.styled';
import { Button } from 'components';
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
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete contact
      </Button>
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
