import PropTypes from 'prop-types';
import { ListItem } from './ContactsListItem.styled';

function ContactsListItem({ name, number }) {
  return (
    <ListItem>
      {name}: {number}
    </ListItem>
  );
}

ContactsListItem.propTypes = {};

export default ContactsListItem;
