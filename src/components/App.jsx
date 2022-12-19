import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { theme } from 'styles/theme';
import {
  Form,
  Filter,
  ContactsList,
  Container,
  Section,
  Title,
  SubTitle,
} from './';

const STORAGE_KEY = 'contacts';

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

  componentDidMount() {
    const storageData = localStorage.getItem(STORAGE_KEY);
    if (storageData) {
      this.setState(JSON.parse(storageData));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts === prevState.contacts) {
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
  }

  addNewContact = newContact => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      toast.error(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...newContact }, ...prevState.contacts],
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilterInputChange = e => {
    const filter = e.target.value;
    this.setState({ filter });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <ThemeProvider theme={theme}>
        <Section>
          <Container>
            <Title>Phonebook</Title>
            <Form addNewContact={this.addNewContact} />
          </Container>
        </Section>
        <Section>
          <Container>
            {contacts.length > 0 ? (
              <>
                <Filter
                  currentFilter={filter}
                  onFilterInputChange={this.onFilterInputChange}
                />
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
        <ToastContainer />
      </ThemeProvider>
    );
  }
}
