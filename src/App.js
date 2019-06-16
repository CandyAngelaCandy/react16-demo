import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const CommentListWithSubscription = withSubscription(
        CommentList,
        (DataSource) => DataSource.getComments()
    );

    const BlogPostWithSubscription = withSubscription(
        BlogPost,
        (DataSource, props) => DataSource.getBlogPost(props.id)
    );
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
