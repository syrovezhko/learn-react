import React from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import { useState } from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import { useEffect } from "react";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async() => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton
        style={{marginTop: 30}}
        onClick={() => setModal(true)}>
          add post
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}>
          <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}/>

      {postError && 
      <p style={{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '20px 0',
        border: '2px solid red'}}>
          I'm sorry, there was an error:<br />"{postError}"
      </p>
      }

      {isPostLoading
        ? <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 50
            }}>
              <Loader/>
          </div>
        : <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Post's list" />
      }
  </div>
  );
}

export default App;
