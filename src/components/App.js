import './App.css';
import articles from '../fixtures/articles';
import Article from '../components/article/Article';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="article-list">
          <Article article={articles[0]} />
        </div>
      </div>
    );
  }
}

export default App;
