import React from 'react';
import './Lunch.css';

const Lunch = () => {
  const lunchRecipes = [
    {
      id: 'sandwich',
      title: 'Classic Sandwich',
      image: '/images/lunch/sandwich.jpg',
      description: 'A classic sandwich with your choice of fillings.',
    },
    {
      id: 'salad',
      title: 'Caesar Salad',
      image: '/images/lunch/salad.jpg',
      description: 'A fresh Caesar salad with crispy croutons.',
    },
    {
      id: 'soup',
      title: 'Tomato Soup',
      image: '/images/lunch/soup.jpg',
      description: 'A warm and comforting tomato soup.',
    },
  ];

  return (
    <div className="lunch-container">
      <h1>Lunch Recipes</h1>
      <div className="lunch-grid">
        {lunchRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lunch; 