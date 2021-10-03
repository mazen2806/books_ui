import React from "react";
import './Article.css';


function Article(props) {
    const {article} = props;
    return (
      <div className="article-item">
        <h2>{article.title}</h2>
        <p>{article.text}</p>
      </div>
    );
  }
  
  export default Article;