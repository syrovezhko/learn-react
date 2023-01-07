# learnReact
## Day 4 `07/01/2023`

Happy New Year motherfucker...

---

🎄🎄🎄🎆🎆🎆✨✨✨🎇🎇🎇🎄🎄🎄

---
> Well, I've fucked up all day yesterday because of my illness. I couldn't be in a non-lying position. I didn't get any better today. I just do codding in the bed.

## A first UI library

I think it's time to do something more serious. For example, a form control library that needs to create new posts.  
I'll start to develop in `App.js`, and at the end I'll made a decomposition into a new component.

First of all, I need a file structure with the `UI` folder as the `root` directory in the `components`. Look at the picture below 👇👇👇

<div align="center">
  <img src="UI_1.jpg">
</div>

Pay attention, every component has own folder and a `stylesheet`. The stylesheet's `name` is written with an `.module` extension.

Then, I'd like to make a simple form with two inputs and a button in `App.js`:

```jsx
<form action="">
  <input type="text" placeholder="Post name" />
  <input type="text" placeholder="Post description" />
  <button>Add post</button>
</form>
```
The next step is the `MyButton` work out. I need some skeleton and styles of course:
<table align="center">
  <tr>
    <th>MyButton.jsx</th>
    <th>MyButton.module.css</th>
  </tr>
  <tr>
  <td valign="top">

  ```jsx
    import React from 'react';
    import classes from './MyButton.module.css';

    const MyButton = (props) => {
      return (
        <button className={classes.myBtn}>
          {props.children}
        </button>
      );
    };

    export default MyButton;
  ```
  </td>

  <td valign="top">

  ```jsx
  .myBtn {
    padding: 5px 15px;
    color: teal;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid teal;
    cursor: pointer;
  }
  ```
  </td>
  </tr>
</table>

Take a look to the `MyButton.jsx	`. I import `styles` as a `property` of the classes `object`, but more on that later. The `{props.children}` is provide a `nested <children> element`.

To make sure there's works I have to change the `button` tag of form  as the `MyButton` in `App.js`.

```jsx
<MyButton>Add post</MyButton>
```

In order to `get` all `props` in `MyButton` I have to change that like this: the `(props)` become the `({children, ...props})`, and the `button` tag get all `props` also.
> All props written like `...props`.

```jsx
const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};
```
The `MyInput` is created in the same way:
<table align="center">
  <tr>
    <th>MyInput.jsx</th>
    <th>MyInput.module.css</th>
  </tr>
  <tr>
  <td valign="top">

  ```jsx
    import React from 'react';
    import classes from './MyInput.module.css'

    const MyInput = (props) => {
      return (
        <input className={classes.myInput} {...props} />
      );
    });

    export default MyInput;
  ```
  </td>

  <td valign="top">

  ```jsx
  .myInput {
    width: 100%;
    padding: 5px 15px;
    margin: 5px 0;
    border: 1px solid teal;
  }
  ```
  </td>
  </tr>
</table>

And so, the `App.js` form has been changed:
```jsx
<form action="">
  <MyInput type="text" placeholder="Post name" />
  <MyInput type="text" placeholder="Post description" />
  <MyButton>Add post</MyButton>
</form>
```

---

That's enough for today, I guess.

---

### [Back to main branch](https://github.com/syrovezhko/learn-react#learnreact)
#### [checkout **Day 3**](https://github.com/syrovezhko/learn-react/tree/day_3#learnreact) | [checkout **Day 5**](https://github.com/syrovezhko/learn-react/tree/day_5#learnreact)
#### [My CV](https://github.com/syrovezhko)