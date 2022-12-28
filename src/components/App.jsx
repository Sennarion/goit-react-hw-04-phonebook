import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
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
  Modal,
  Form,
  UpdateForm,
} from './';
import api from 'services/mockApi';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .getContacts()
      .then(data => setContacts(data))
      .catch(error =>
        toast.error(`Whooops... Something went wrong. ${error.message}`)
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
        toast.error(`Whooops... Something went wrong. ${error.message}`)
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
        toast.error(`Whooops... Something went wrong. ${error.message}`)
      )
      .finally(() => setIsLoading(false));
  };

  const updateContact = contact => {
    setIsLoading(true);
    api
      .updateContact(contact)
      .then(updatedContact => {
        setContacts(prev =>
          prev.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
          )
        );
      })
      .catch(error =>
        toast.error(`Whooops... Something went wrong. ${error.message}`)
      )
      .finally(() => setIsLoading(false));
  };

  const showUpdateForm = id => {
    const user = contacts.find(contact => contact.id === id);
    setUserToUpdate(user);
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
              showUpdateForm={showUpdateForm}
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Modal toggleModal={setIsModalOpen} isModalOpen={isModalOpen}>
              <Form
                addNewContact={addNewContact}
                setIsModalOpen={setIsModalOpen}
              />
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {userToUpdate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Modal toggleModal={setUserToUpdate}>
              <UpdateForm
                updateContact={updateContact}
                setUserToUpdate={setUserToUpdate}
                userToUpdate={userToUpdate}
              />
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoading && <Loader />}
      <GlobalStyleComponent />
      <ToastContainer />
    </ThemeProvider>
  );
}
