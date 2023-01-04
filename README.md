# learnReact
## Day 1 `04/01/2023`

Happy New Year motherfucker...

---

🎄🎄🎄🎆🎆🎆✨✨✨🎇🎇🎇🎄🎄🎄

---
Well it's time to continue yesterday's [party](https://github.com/syrovezhko/learn-react/tree/day_1#learnreact)

## Controlled Components and `two-way bindings` magic
All right, yesterday I've got acquainted the UseState  on the example of `numbers` changing as [simple counter](https://github.com/syrovezhko/learn-react/tree/day_1#back-to-main-branch). Now I want to try changing the `string` type `state`.  
I'll start by adding a new state that will work with input values:

```js
const [value, setValue] = useState('Text in input')
```
I need to add some HTML stuff also.

```jsx
return (
  <div className="App">
    {/* _________________ */}
    {/* the previous "UI" */}
    {/* _________________ */}
    <h1>{likes}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    {/* ____________ */}
    {/* a new "UI" */}
    {/* ____________ */}
    <hr/>
    <h2>{value}</h2>
    <input
      type="text"
      value={value}>
    </input>
  </div>
);
```
You may try to test this but it won't work. 
The whole point is that I declared the `value` with static `text` without an `onChange` handler.
<div align="center">
    <img src="ControlledComponents_1.jpg">
</div>

It necessary to add the `onChange` event listener as an `attribute` of `input` tag. Of course, as you know, the `event listener` `call back` has the first parameter, an `event`, with two fields: a `target` and a `value`. The DOM element and that element's `value`, simply put. In this case, it is possible to extract the `value` and put it to the `state`. It's called `two-way binding`. Here we go!
```jsx
<input
  type="text"
  value={value}
  onChange={event => setValue(event.target.value)}>
</input>
```

<div align="center">
    <img src="ControlledComponents_2.gif">
</div>
<details><summary>Now <b><i>App.js</i></b> look like this 👈👈👈<br/><sup>Attention! It's may seem like a long read.</sup></summary>

```jsx
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

```
</details>

## The component approach

---

That's enough for today, I guess.

---

### [Back to main branch](https://github.com/syrovezhko/learn-react)
#### [checkout **Day 1**](https://github.com/syrovezhko/learn-react/tree/day_1#learnreact) | [checkout **Day 3**](https://github.com/syrovezhko/learn-react/tree/day_3#learnreact)
#### [My CV](https://github.com/syrovezhko)