import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(5)

  function increment () {
    setLikes(likes + 1);
  }

  function decrement () {
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
