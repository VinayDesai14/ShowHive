import React, { useState } from 'react';
import './Categories.css';

const Categories = ({ categories = [], handleTypeChange }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (category, index) => {
    if (activeButton === index) {
      setActiveButton(null);
      handleTypeChange(null); // Reset if deselecting
    } else {
      setActiveButton(index);
      handleTypeChange(category); // Pass selected category to parent
    }
  };
  return (
    <div className="categories">
      {categories && categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(category, index)}
          className={activeButton === index ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
