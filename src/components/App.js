import './App.css';
import articles from '../fixtures/articles';
import ArticleList from '../components/article-list/ArticleList';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="article-list">
          <ArticleList articles={articles} />
        </div>
      </div>
    );
  }
}

export default App;
