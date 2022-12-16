import React, { Component } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { Section } from './Section/Section.styled';
import { Container } from './Container/Container.styled';
import { Title } from 'styles/Title.styled';
import { SubTitle } from 'styles/SubTitle.styled';
import Filter from './Filter/Filter';
import ContactForm from './Form/ContactForm';
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
      Report.failure(`Oooops...`, `${name} is already in contacts`, 'Okay');
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
    const { contacts } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <ThemeProvider theme={theme}>
        <Section>
          <Container>
            <Title>Phonebook</Title>
            <ContactForm addNewContact={this.addNewContact} />
          </Container>
        </Section>
        <Section>
          <Container>
            {contacts.length > 0 ? (
              <>
                <Filter onFilterInputChange={this.onFilterInputChange} />
                <SubTitle>Contacts</SubTitle>
                <ContactsList
                  contacts={filteredContacts}
                  deleteContact={this.deleteContact}
                />
              </>
            ) : (
              <SubTitle>Contacts list is empty</SubTitle>
            )}
          </Container>
        </Section>
        <GlobalStyleComponent />
      </ThemeProvider>
    );
  }
}
