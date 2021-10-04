import React, { Component } from "react";
import BookItem from "../book-item/BookItem";
import "./BookList.css";


class BookList extends Component {
  render() {
    const {books} = this.props;
    const booksElements = books.map(book => 
        <li key={book.id}>
            <BookItem book={book} />
        </li>
    );
    return (
      <ul className="book-list">
          {booksElements}
      </ul>
    );
  }
}
  
  export default BookList;