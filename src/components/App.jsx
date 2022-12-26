import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { theme } from 'styles/theme';
import {
  Filter,
  ContactsList,
  Container,
  Section,
  Header,
  EmptyList,
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
        { id: 'id-5', name: 'Dien Norris', number: '+233-65-21' },
        { id: 'id-6', name: 'Tomas Smith', number: '+437-12-09' },
      ]
  );
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const onFilterInputChange = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <ThemeProvider theme={theme}>
      <Header
        addNewContact={addNewContact}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <Section>
        <Container>
          {contacts.length > 0 && (
            <Filter
              currentFilter={filter}
              onFilterInputChange={onFilterInputChange}
            />
          )}

          {filteredContacts.length > 0 && (
            <ContactsList
              contacts={filteredContacts}
              deleteContact={deleteContact}
            />
          )}

          {contacts.length === 0 && (
            <EmptyList setIsModalOpen={setIsModalOpen} />
          )}
          {contacts.length > 0 && filteredContacts.length === 0 && (
            <p>
              There are no contacts with the name <strong>{filter}</strong>
            </p>
          )}
        </Container>
      </Section>

      <GlobalStyleComponent />
      <ToastContainer />
    </ThemeProvider>
  );
}
