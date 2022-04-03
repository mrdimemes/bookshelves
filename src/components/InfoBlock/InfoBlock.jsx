import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const renderBook = (book) => {
  if (book) {
    return <div className='infoblock__book'>
      <p className='infoblock__autor'>{book.autor}</p>
      <p className='infoblock__title'>{book.title}</p>
      <p className='infoblock__year'>{book.year}</p>
      <p className='infoblock__pages'>{book.pages}</p>
    </div>
  } else {
    return <div className='infoblock__book'>Книга не выбрана</div>
  }
}

const InfoBlock = (activeBook) => {
  return (
    <div className='infoblock'>
      {renderBook(activeBook.activeBook)}
    </div>
  );
}

InfoBlock.propTypes = {
  activeBook: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps, null)(InfoBlock);