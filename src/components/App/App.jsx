import React from 'react';
import { connect } from 'react-redux';
import { InfoBlock } from '../';
import { setBooks, booksLoaded } from '../../redux/reducers/bookcase';

function App({ saveBooks, loaded }) {
  React.useEffect(() => {
    fetch('http://localhost:3000/books.json')
      .then((response) => response.json())
      .then((json) => {
        saveBooks(json.books);
        loaded();
      });
      // eslint-disable-next-line
  }, []);

  return (
    <div className='app'>
      <InfoBlock />
    </div>
  );
}

const mapDispatchToProp = (dispatch) => {
  return {
    saveBooks: (books) => dispatch(setBooks(books)),
    loaded: () => dispatch(booksLoaded())
  }
}

export default connect(null, mapDispatchToProp)(App);