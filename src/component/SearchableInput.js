import React, { useState, useEffect } from 'react';

const SearchableSelect = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  // Simulated data array (replace with your actual data fetching logic)
  const dataArray = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Lemon',
    'Orange',
    'Peach',
    'Pear',
  ];

  useEffect(() => {
    // Filter data array based on input value
    const filteredOptions = dataArray.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setOptions(filteredOptions);
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSelectedOption(null); // Clear selected option when typing
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setInputValue(selectedValue);
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchableSelect;
