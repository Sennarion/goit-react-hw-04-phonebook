import React, { Component } from 'react';
import { Section } from './Section/Section.styled';
import { Container } from './Container/Container.styled';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';

export default class App extends Component {
  state = {
    contacts: [],
  };

  addNewContact = ({ id, name, number }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section>
          <Container>
            <h1>Phonebook</h1>
            <Form addNewContact={this.addNewContact} />
          </Container>
        </Section>
        <Section>
          <Container>
            <h2>Phonebook list</h2>
            <ContactsList contacts={contacts} />
          </Container>
        </Section>
      </>
    );
  }
}
