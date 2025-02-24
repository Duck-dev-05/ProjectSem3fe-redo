import React from 'react';
import './LunchPage.css'; // Ensure you have this CSS file for styling
import { Link } from 'react-router-dom';

const LunchPage = () => {
  const lunchCategories = [
    { id: 'salads', title: 'Salads' },
    { id: 'sandwiches', title: 'Sandwiches' },
    { id: 'soups', title: 'Soups' },
    { id: 'wraps', title: 'Wraps' },
    // Add more categories as needed
  ];

  const featuredRecipes = [
    {
      id: 'caesar-salad',
      title: 'Caesar Salad',
      image: '/images/lunch/caesar-salad.jpg',
      description: 'A classic Caesar salad with fresh romaine and croutons.',
    },
    {
      id: 'club-sandwich',
      title: 'Club Sandwich',
      image: '/images/lunch/club-sandwich.jpg',
      description: 'A hearty club sandwich stacked with turkey, bacon, and lettuce.',
    },
    {
      id: 'tomato-soup',
      title: 'Tomato Soup',
      image: '/images/lunch/tomato-soup.jpg',
      description: 'A warm and comforting tomato soup perfect for dipping.',
    },
  ];

  return (
    <div className="lunch-page">
      <h2>Lunch Recipes</h2>
      <p>Discover a variety of delicious lunch recipes!</p>
      <h3>Explore Lunch Categories:</h3>
      <div className="category-list">
        {lunchCategories.map(category => (
          <Link key={category.id} to={`/category/meals/lunch/${category.id}`} className="category-item">
            {category.title}
          </Link>
        ))}
      </div>
      <h3>Featured Lunch Recipes:</h3>
      <div className="featured-recipes">
        {featuredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} className="view-recipe">View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LunchPage; 