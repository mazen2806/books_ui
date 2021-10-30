import './App.css';
import books from '../fixtures/books';
import BookList from '../components/book-list/BookList';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container" >
        <div className="book-list">
          <BookList books={books} />
        </div>
      </div>
    );
  }
}

export default App;
