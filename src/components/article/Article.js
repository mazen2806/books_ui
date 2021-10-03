import React, { Component } from "react";
import './Article.css';


class Article extends Component {
  state = {
    isOpen: true
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {article} = this.props;
    const body = this.state.isOpen && <section>{article.text}</section>;
    return (
      <div className="article-item">
        <h2>{article.title}
          <button onClick={this.handleClick} className="show-hide-btn">
            {this.state.isOpen ? 'Show' : 'Hide'}
          </button>
        </h2> 
        {body}
      </div>
    );
  }
}
  
  export default Article;