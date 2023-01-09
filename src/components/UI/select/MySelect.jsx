import React from 'react';

// it's accept an options array and a default value
const MySelect = ({options, defaultValue}) => {
  return (
    <select>
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