import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveBook } from '../../redux/reducers/bookcase';


const Book = ({ autor, title, id, makeActive }) => {
  return (
    <li className='book' onClick={makeActive(id)}>
      <p className='book__autor'>{autor}</p>
      <p className='book__title'>{title}</p>
    </li>
  );
}


Book.propTypes = {
  autor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  makeActive: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeActive: (bookId) => {
      dispatch(setActiveBook(bookId));
    }
  }
}

export default connect(null, mapDispatchToProps)(Book);