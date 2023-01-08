import React from 'react';
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
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
  );
};

export default PostForm;