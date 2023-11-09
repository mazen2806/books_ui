import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
    const body = this.state.isOpen && <section className="card-text">{book.author}</section>;

    return (
        <div className="book-item card">
          <div className="card-header">
            <Link to="/about">
              <h4>
                {book.title}
              </h4>
            </Link>
            <button onClick={this.handleClick} className="btn btn-primary ">
              {this.state.isOpen ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="card-body">
            {body}
          </div> 
        </div>
    );
  }
}
  
export default BookItem;