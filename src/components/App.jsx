import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { Section } from './Section/Section.styled';
import { Container } from './Container/Container.styled';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import { theme } from 'styles/theme';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+227-91-26' },
    ],
    filter: '',
  };

  addNewContact = ({ id, name, number }) => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('alert');
      return;
    }

    this.setState(prevState => ({
      contacts: [{ id, name, number }, ...prevState.contacts],
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilterInputChange = filter => {
    this.setState({ filter });
  };

  render() {
    const filteredContacts = this.filterContacts();

    return (
      <ThemeProvider theme={theme}>
        <Section>
          <Container>
            <h1>Phonebook</h1>
            <Form addNewContact={this.addNewContact} />
          </Container>
        </Section>
        <Section>
          <Container>
            <Filter onFilterInputChange={this.onFilterInputChange} />
            <h2>Phonebook list</h2>
            <ContactsList
              contacts={filteredContacts}
              deleteContact={this.deleteContact}
            />
          </Container>
        </Section>
        <GlobalStyleComponent />
      </ThemeProvider>
    );
  }
}
