import React, { Component } from "react";

import BookItem from "../book-item/BookItem";
import books from '../../fixtures/books';
import "./BookList.css";


import * as collections from '../../fixtures/books';


class BookList extends Component {

  render() {
    const listStyle = {width: '50%'};

    console.log(collections);
    
    const booksElements = books.map(book => 
        <li key={book.id}>
          <BookItem book={book} />
        </li>
    );
    return (
      <div className="container" >
        <div className="book-list">
          <ul className="book-list" style={listStyle}>
              {booksElements}
          </ul>
        </div>
      </div>  
    );
  }
}
  
export default BookList;