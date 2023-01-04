import React from "react";
import Counter from "./components/Counter";
import TextInput from "./components/TextInput";

function App() {

  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
      <hr/>
      <TextInput/>
      <TextInput/>
    </div>
  );
}

export default App;
