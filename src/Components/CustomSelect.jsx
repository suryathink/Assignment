import React from 'react';

const options = [
  { value: 'option1', label: 'Option 1', imageSrc: './Assets/Binance.jpeg' },
  { value: 'option2', label: 'Option 2', imageSrc: './Assets/Binance.jpeg' },
  { value: 'option3', label: 'Option 3', imageSrc: '/path/to/image3.jpg' },
];

function CustomSelect() {
  return (
    <select>
    
      {options.map(({ value, label, imageSrc }) => (
        <option key={value} value={value} style={{ backgroundImage: `url(${imageSrc})` }}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
