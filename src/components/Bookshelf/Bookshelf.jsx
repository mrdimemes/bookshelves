import React from 'react';
import PropTypes from 'prop-types';
import { Book } from '../';


const Bookshelf = ({ books }) => {
  return (
    <ul className='bookshelf'>
      {
        books.map((book) => {
          return <Book key={book.id} book={book} />
        })
      }
    </ul>
  );
}

Bookshelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object)
}

export default Bookshelf;