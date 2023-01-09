import React from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import { useState } from "react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'The first title', body: 'The first description'},
    {id: 2, title: 'The second title', body: 'The second description'},
    {id: 3, title: 'The third title', body: 'description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <MySelect 
          defaultValue="Sorting"
          options={[
            {value: 'title', name: 'By title'},
            {value: 'body', name: 'By description'}
          ]}/>
      </div>
      {posts.length !== 0
        ? <PostList
            remove={removePost}
            posts={posts}
            title="Post's list" />
        : <h1
            style={{textAlign: 'center'}}>
              There are no posts here yet
          </h1>
      }
  </div>
  );
}

export default App;
