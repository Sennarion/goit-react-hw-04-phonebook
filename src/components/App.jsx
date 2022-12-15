import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Input from './Input/Input';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Input />
      </>
    );
  }
}
