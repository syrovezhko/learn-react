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

function App() {
  const [posts, setPosts] = useState([])

  // replaced selectedSort and searchQuery
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostLoading, setIsPostLoading] = useState(false);

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostLoading(false);
    }, 3000)
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
