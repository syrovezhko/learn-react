import React, { useRef } from "react";
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

  const [title, setTitle] = useState('')
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
  }

  return (
    <div className="App">
      <form action="">
      {/* a controlled component */}
        <MyInput
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="Post name" />

        {/* an uncontrolled component */}
        <MyInput
          ref={bodyInputRef}
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
