import PropTypes from 'prop-types';
import { ListItem, Text, Buttons } from './ContactsListItem.styled';
import { Button } from 'components';
import { theme } from '../../styles/theme';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdAutorenew, MdOutlineDelete } from 'react-icons/md';

function ContactsListItem({ id, name, number, deleteContact, showUpdateForm }) {
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
      <Buttons>
        <Button type="button" onClick={() => showUpdateForm(id)}>
          <MdAutorenew size={theme.spacing(6)} />
          Update
        </Button>
        <Button type="button" onClick={() => deleteContact(id)} red>
          <MdOutlineDelete size={theme.spacing(6)} />
          Delete
        </Button>
      </Buttons>
    </ListItem>
  );
}

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  showUpdateForm: PropTypes.func.isRequired,
};

export default ContactsListItem;
