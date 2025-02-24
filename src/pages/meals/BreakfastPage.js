import React from 'react';
import './BreakfastPage.css'; // Ensure you have this CSS file for styling
import { Link } from 'react-router-dom';

const BreakfastPage = () => {
  const breakfastCategories = [
    { id: 'pancakes', title: 'Pancakes' },
    { id: 'waffles', title: 'Waffles' },
    { id: 'omelettes', title: 'Omelettes' },
    { id: 'smoothies', title: 'Smoothies' },
    { id: 'casseroles', title: 'Breakfast Casseroles' },
    // Add more categories as needed
  ];

  const featuredRecipes = [
    {
      id: 'fluffy-pancakes',
      title: 'Fluffy Pancakes',
      image: '/images/breakfast/fluffy-pancakes.jpg',
      description: 'Light and fluffy pancakes perfect for breakfast.',
    },
    {
      id: 'vegetable-omelette',
      title: 'Vegetable Omelette',
      image: '/images/breakfast/vegetable-omelette.jpg',
      description: 'A delicious omelette filled with fresh vegetables.',
    },
    {
      id: 'berry-smoothie',
      title: 'Berry Smoothie',
      image: '/images/breakfast/berry-smoothie.jpg',
      description: 'A refreshing smoothie made with mixed berries.',
    },
  ];

  return (
    <div className="breakfast-page">
      <h2>Breakfast & Brunch</h2>
      <p>Create a delicious breakfast or brunch with top-rated recipes!</p>
      <h3>Explore Breakfast Categories:</h3>
      <div className="category-list">
        {breakfastCategories.map(category => (
          <Link key={category.id} to={`/category/meals/breakfast/${category.id}`} className="category-item">
            {category.title}
          </Link>
        ))}
      </div>
      <h3>Featured Breakfast Recipes:</h3>
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

export default BreakfastPage; 