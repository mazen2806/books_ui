import React, { Component } from "react";
import Article from "../article/Article";
import "./ArticleList.css";


class ArticleList extends Component {
  render() {
    const {articles} = this.props;
    const articlesElements = articles.map(article => 
        <li key={article.id}>
            <Article article={article} />
        </li>
    );
    return (
      <ul className="articles-list">
          {articlesElements}
      </ul>
    );
  }
}
  
  export default ArticleList;