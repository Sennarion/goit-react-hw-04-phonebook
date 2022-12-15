import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Input from './Input/Input';
import ContactsList from './ContactsList/ContactsList';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onFormSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
    e.target.reset();
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <Input onFormSubmit={this.onFormSubmit} />
        <ContactsList contacts={contacts} />
      </>
    );
  }
}
