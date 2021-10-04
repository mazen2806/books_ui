import './App.css';
import books from '../fixtures/books';
import BookList from '../components/book-list/BookList';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="book-list">
          <BookList books={books} />
        </div>
      </div>
    );
  }
}

export default App;
