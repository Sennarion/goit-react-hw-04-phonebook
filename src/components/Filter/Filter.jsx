import PropTypes from 'prop-types';
function Filter({ onFilterInputChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={e => onFilterInputChange(e.target.value)} />
    </>
  );
}
Filter.propTypes = {};
export default Filter;
