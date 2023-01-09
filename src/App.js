import React from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import { useState } from "react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aaa', body: 'bbb'},
    {id: 2, title: 'ddd', body: 'aaa'},
    {id: 3, title: 'ccc', body: 'fff'},
  ])

  // the state for two-way binding of sorting
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  // a sorting function
  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
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
