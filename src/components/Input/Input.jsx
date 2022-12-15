import PropTypes from 'prop-types';

function Input(props) {
  return (
    <>
      <label htmlFor="input">Name</label>
      <input
        id="input"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
}

Input.propTypes = {};

export default Input;
