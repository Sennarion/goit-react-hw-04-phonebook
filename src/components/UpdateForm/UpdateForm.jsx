import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { StyledForm, Label, Input, LabelName } from './UpdateForm.styled';
import { Button } from 'components';

export default function UpdateForm({
  updateContact,
  setUserToUpdate,
  userToUpdate,
}) {
  const [name, setName] = useState(userToUpdate.name);
  const [number, setNumber] = useState(userToUpdate.number);

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const onInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    updateContact({ id: userToUpdate.id, name, number });

    setName('');
    setNumber('');
    setUserToUpdate(null);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Label>
        <LabelName>Name</LabelName>

        <Input
          ref={nameInputRef}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onInputChange}
          value={name}
          spellCheck="false"
        />
      </Label>

      <Label>
        <LabelName>Number</LabelName>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInputChange}
          value={number}
        />
      </Label>
      <Button type="submit">Update contact</Button>
    </StyledForm>
  );
}

UpdateForm.propTypes = {
  updateContact: PropTypes.func.isRequired,
  setUserToUpdate: PropTypes.func.isRequired,
  userToUpdate: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
