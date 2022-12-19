import PropTypes from 'prop-types';
import { FilterWrapper } from './Filter.styled';
import { SubTitle } from 'components/SubTitle/SubTitle.styled';

function Filter({ currentFilter, onFilterInputChange }) {
  return (
    <FilterWrapper>
      <SubTitle>Find contacts by name</SubTitle>
      <input type="text" value={currentFilter} onChange={onFilterInputChange} />
    </FilterWrapper>
  );
}

Filter.propTypes = {
  onFilterInputChange: PropTypes.func.isRequired,
};

export default Filter;
