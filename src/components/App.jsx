import { useEffect, useState } from 'react';
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

export default function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '+459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '+443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '+645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '+227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      toast.error(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts(prev => [{ id: nanoid(), ...newContact }, ...prev]);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const onFilterInputChange = e => {
    setFilter(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Container>
          <Title>Phonebook</Title>
          <Form addNewContact={addNewContact} />
        </Container>
      </Section>
      <Section>
        <Container>
          {contacts.length > 0 ? (
            <>
              <Filter
                currentFilter={filter}
                onFilterInputChange={onFilterInputChange}
              />
              <SubTitle>Contacts</SubTitle>
              <ContactsList
                contacts={filterContacts()}
                deleteContact={deleteContact}
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
