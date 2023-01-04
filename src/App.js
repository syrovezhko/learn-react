import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(5)
  const [value, setValue] = useState('Text in input')

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
      <hr/>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}>
      </input>
    </div>
  );
}

export default App;
