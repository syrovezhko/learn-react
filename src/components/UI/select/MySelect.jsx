import React from 'react';

// it's accept an options array and a default value
/*  In order to realize a two-way binding and to make the 
    Controlled component, I have to add tho more props
*/
const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}>
      <option disabled value="">{defaultValue}</option>
{/* iterate over the array by map function */}
      {options.map(option =>
      // and renter each iterated option
// key={option.value} because each select's value is unique
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
};

export default MySelect;