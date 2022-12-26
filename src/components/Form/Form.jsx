import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { StyledForm, Label, Input, LabelName } from './Form.styled';
import { Button } from 'components';

export default function Form({ addNewContact, setIsModalOpen }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const onInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    addNewContact({ name, number });

    setName('');
    setNumber('');
    setIsModalOpen(false);
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
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
}

Form.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
