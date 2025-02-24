import React from 'react';
import './Breakfast.css';
import { Link } from 'react-router-dom';

const Breakfast = () => {
  const breakfastCategories = [
    { id: 'breads', title: 'Breakfast Bread' },
    { id: 'waffles', title: 'Waffles' },
    { id: 'drinks', title: 'Breakfast Drinks' },
    { id: 'casseroles', title: 'Breakfast Casseroles' },
    { id: 'cereals', title: 'Breakfast Cereals' },
    { id: 'meat', title: 'Breakfast Meat and Seafood' },
    { id: 'pancakes', title: 'Pancakes' },
    { id: 'potatoes', title: 'Breakfast Potatoes' },
    { id: 'cookies', title: 'Breakfast Cookies' },
    { id: 'french-toast', title: 'French Toast' },
    { id: 'crepes', title: 'Crepes and Blintzes' },
    { id: 'eggs', title: 'Breakfast Eggs' },
  ];

  const featuredRecipes = [
    {
      id: 'pancakes',
      title: 'Fluffy Pancakes',
      image: '/images/breakfast/pancakes.jpg',
      description: 'Light and fluffy pancakes perfect for breakfast.',
    },
    {
      id: 'omelette',
      title: 'Vegetable Omelette',
      image: '/images/breakfast/omelette.jpg',
      description: 'A delicious omelette filled with fresh vegetables.',
    },
    {
      id: 'smoothie',
      title: 'Berry Smoothie',
      image: '/images/breakfast/smoothie.jpg',
      description: 'A refreshing smoothie made with mixed berries.',
    },
  ];

  const popularRecipes = [
    {
      id: 'waffles',
      title: 'Crispy Waffles',
      image: '/images/breakfast/waffles.jpg',
      description: 'Crispy on the outside, fluffy on the inside.',
    },
    {
      id: 'french-toast',
      title: 'Classic French Toast',
      image: '/images/breakfast/french-toast.jpg',
      description: 'A breakfast classic that never goes out of style.',
    },
  ];

  return (
    <div className="breakfast-container">
      <h2 style={{ fontSize: '2em', fontWeight: 'bold' }}>Breakfast and Brunch</h2>
      <p>Create a delicious everyday breakfast or pull together an amazing brunch with top-rated recipes for pancakes and waffles, bacon and eggs, brunch casseroles, coffee cakes, muffins, quiche, and so much more.</p>
      <div className="breakfast-links">
        <h2>Explore Breakfast Categories:</h2>
        <div className="category-list">
          {breakfastCategories.map(category => (
            <Link key={category.id} to={`/category/meals/breakfast/${category.id}`} className="category-item">
              {category.title.replace(/-/g, ' ')}
            </Link>
          ))}
        </div>
      </div>
      <div className="breakfast-recipes">
        <h2>Featured Breakfast Recipes</h2>
        <div className="breakfast-grid">
          {featuredRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="view-recipe">View Recipe</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="popular-recipes">
        <h2>Popular Recipes</h2>
        <div className="popular-grid">
          {popularRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="view-recipe">View Recipe</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breakfast; 