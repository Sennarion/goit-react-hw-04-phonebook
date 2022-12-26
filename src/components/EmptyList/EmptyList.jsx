import PropTypes from 'prop-types';
import { Wrapper, AddButton } from './EmptyList.styled';
import { FaUserPlus } from 'react-icons/fa';
import { theme } from '../../styles/theme';

function EmptyList({ setIsModalOpen }) {
  return (
    <Wrapper>
      <AddButton type="button" onClick={() => setIsModalOpen(true)}>
        <FaUserPlus size={theme.spacing(22)} />
        Add new contact
      </AddButton>
    </Wrapper>
  );
}

EmptyList.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default EmptyList;
