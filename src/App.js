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

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(), // make it unique
      title,
      body
    }
    console.log(newPost)
    setPosts([...posts,newPost])
    /*the `...post` is a new array,
    the `newPost` is a nwe post*/
    setBody('') // clear body
    setTitle('') // clear title
  }

  return (
    <div className="App">
      <form action="">
        <MyInput
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="Post name" />
        <MyInput
          value={body}
          onChange={event => setBody(event.target.value)}
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
