import React from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'The first title', body: 'The first description'},
    {id: 2, title: 'The second title', body: 'The second description'},
    {id: 3, title: 'The third title', body: 'description'},
  ])

  return (
    <div className="App">
      <PostList
        posts={posts}
        title="Post's list" />
  </div>
  );
}

export default App;
