import React, { useState } from 'react';

const TextInput = () => {
  const [value, setValue] = useState('Text in input')

  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}>
      </input>
    </div>
  );
};

export default TextInput;