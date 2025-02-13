import React from 'react';
import { Link } from 'react-router-dom';
import './Ingredients.css';

function Ingredients() {
  // Array of ingredient categories and their corresponding images.
  const ingredients = [
    { id: 1, title: 'Chicken', image: '/images/chicken.jpg' },
    { id: 2, title: 'Beef', image: '/images/beef.jpg' },
    { id: 3, title: 'Pork', image: '/images/pork.jpg' },
    { id: 4, title: 'Seafood', image: '/images/seafood.jpg' },
    { id: 5, title: 'Pasta', image: '/images/pasta.jpg' },
    { id: 6, title: 'Fruits', image: '/images/fruits.jpg' },
    { id: 7, title: 'Vegetables', image: '/images/vegetables.jpg' },
    { id: 8, title: 'View All', image: '/images/viewall.jpg' },
  ];

  return (
    <div className="ingredients-page">
      <h1>Ingredients</h1>
      <div className="ingredients-grid">
        {ingredients.map((item) => (
          <Link
            key={item.id}
            to={`/ingredients/${encodeURIComponent(item.title)}`}
            className="ingredient-card"
          >
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Ingredients; 