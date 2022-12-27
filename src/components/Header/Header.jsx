import PropTypes from 'prop-types';
import { StyledHeader, HeaderContent, Logo } from './Header.styled';
import { Container, Button } from '../';
import { FaUserPlus } from 'react-icons/fa';
import { theme } from '../../styles/theme';

function Header({ setIsModalOpen }) {
  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo>Phonebook</Logo>
          <Button type="button" onClick={() => setIsModalOpen(true)}>
            <FaUserPlus size={theme.spacing(8)} />
            Add new contact
          </Button>
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
}

Header.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Header;
