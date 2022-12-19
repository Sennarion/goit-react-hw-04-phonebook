import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Label } from './Form.styled';

export default class Form extends Component {
  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addNewContact(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onInputChange}
            value={name}
          />
        </Label>

        <Label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onInputChange}
            value={number}
          />
        </Label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
