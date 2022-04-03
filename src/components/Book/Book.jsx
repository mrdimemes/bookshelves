import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveBook } from '../../redux/reducers/bookcase';


const Book = ({ book, makeActive }) => {
  return (
    <li className='book' onClick={makeActive(book)}>
      <p className='book__autor'>{book.autor}</p>
      <p className='book__title'>{book.title}</p>
    </li>
  );
}


Book.propTypes = {
  book: PropTypes.object.isRequired,
  makeActive: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeActive: (book) => {
      dispatch(setActiveBook(book));
    }
  }
}

export default connect(null, mapDispatchToProps)(Book);