import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import BookList from '../components/book-list/BookList';
import About from '../components/about/About';

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}

export default App;
