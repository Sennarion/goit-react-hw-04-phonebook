import { StyledHeader, HeaderContent, Logo } from './Header.styled';
import { Container, Form, Button, Modal } from '../';
import { FaUserPlus } from 'react-icons/fa';
import { theme } from '../../styles/theme';

function Header({ addNewContact, isModalOpen, setIsModalOpen }) {
  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo>Phonebook</Logo>
          <Button type="button" onClick={() => setIsModalOpen(true)}>
            <FaUserPlus size={theme.spacing(8)} />
            Add new contact
          </Button>
          {isModalOpen && (
            <Modal setIsModalOpen={setIsModalOpen}>
              <Form
                addNewContact={addNewContact}
                setIsModalOpen={setIsModalOpen}
              />
            </Modal>
          )}
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
}

export default Header;
