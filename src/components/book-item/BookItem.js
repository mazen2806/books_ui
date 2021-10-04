import React, { Component } from "react";
import './BookItem.css';


class BookItem extends Component {
  state = {
    isOpen: true
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {book} = this.props;
    const body = this.state.isOpen && <section>{book.author}</section>;
    return (
      <div className="book-item">
        <h4>{book.title}
          <button onClick={this.handleClick} className="show-hide-btn">
            {this.state.isOpen ? 'Show' : 'Hide'}
          </button>
        </h4> 
        {body}
      </div>
    );
  }
}
  
export default BookItem;