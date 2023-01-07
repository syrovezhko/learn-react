import React from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import { useState } from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'The first title', body: 'The first description'},
    {id: 2, title: 'The second title', body: 'The second description'},
    {id: 3, title: 'The third title', body: 'description'},
  ])

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form action="">
        <MyInput
          value={post.title}
          onChange={event => setPost({...post, title: event.target.value})}
          type="text"
          placeholder="Post name" />
        <MyInput
          value={post.body}
          onChange={event => setPost({...post, body: event.target.value})}
          type="text"
          placeholder="Post description" />
        <MyButton onClick={addNewPost} >Add post</MyButton>
      </form>
      <PostList
        posts={posts}
        title="Post's list" />
  </div>
  );
}

export default App;
