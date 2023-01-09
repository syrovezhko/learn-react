import React from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import { useState } from "react";
import PostForm from "./components/PostForm";
import { useMemo } from "react";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aaa', body: 'bbb'},
    {id: 2, title: 'ddd', body: 'aaa'},
    {id: 3, title: 'ccc', body: 'fff'},
  ])

  // replaced selectedSort and searchQuery
  const [filter, setFilter] = useState({sort: '', query: ''})

  // optimized getSortedPosts by cash of useMemo hook
  const sortedPosts = useMemo(() => {
    console.log('useMemo has been called')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  // make a search based on sorted array of posts
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

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
      <PostFilter
        filter={filter}
        setFilter={setFilter}/>
{/* changed the checkable array because of a search queries */}
      {sortedAndSearchedPosts.length !== 0
        ? <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
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
