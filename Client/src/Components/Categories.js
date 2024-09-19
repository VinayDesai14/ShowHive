import React, { useState } from 'react';
import './Categories.css';

const Categories = () => {
  // State to keep track of the active button
  const [activeButton, setActiveButton] = useState(null);

  // Handler to update the active button index
  const handleButtonClick = (index) => {
    if(activeButton===index){
        setActiveButton(-1);
    }else setActiveButton(index);
  };

  const categories = [
    "Online Streaming",
    "Comedy shows",
    "Action movies",
    "Drama",
    "Horror",
    "Documentaries",
    "Cartoons",
    "Music Shows",
  ];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className={activeButton === index ? 'active' : ''} // Add active class to clicked button
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
