import PropTypes from 'prop-types';
import { FilterWrapper } from './Filter.styled';
import { SubTitle } from 'styles/SubTitle.styled';

function Filter({ onFilterInputChange }) {
  return (
    <FilterWrapper>
      <SubTitle>Find contacts by name</SubTitle>
      <input type="text" onChange={e => onFilterInputChange(e.target.value)} />
    </FilterWrapper>
  );
}

Filter.propTypes = {
  onFilterInputChange: PropTypes.func.isRequired,
};

export default Filter;
