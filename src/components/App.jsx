import { useEffect, useState } from 'react';
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
  Loader,
} from './';
import api from 'services/mockApi';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .getContacts()
      .then(data => setContacts(data))
      .catch(error =>
        toast.error(`Wooops... Something went wrong. ${error.message}`)
      )
      .finally(() => setIsLoading(false));
  }, []);

  const addNewContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      toast.error(`${newContact.name} is already in contacts`);
      return;
    }

    setIsLoading(true);
    api
      .addContact(newContact)
      .then(newContact => {
        setContacts(prev => [...prev, newContact]);
      })
      .catch(error =>
        toast.error(`Wooops... Something went wrong. ${error.message}`)
      )
      .finally(() => setIsLoading(false));
  };

  const deleteContact = id => {
    setIsLoading(true);
    api
      .deleteContact(id)
      .then(deletedContact => {
        setContacts(prev =>
          prev.filter(contact => contact.id !== deletedContact.id)
        );
      })
      .catch(error =>
        toast.error(`Wooops... Something went wrong. ${error.message}`)
      )
      .finally(() => setIsLoading(false));
  };

  const onFilterInputChange = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts
    .filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    )
    .reverse();

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

      {isLoading && <Loader />}
      <GlobalStyleComponent />
      <ToastContainer />
    </ThemeProvider>
  );
}
