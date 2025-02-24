import React from 'react';
import { Link } from 'react-router-dom';
import './AllMeals.css';

function AllMeals() {
  // Array of meal topics and their corresponding images
  const recipes = [
    { id: 1, title: 'Breakfast & Brunch', image: '/images/breakfast-brunch.jpg', path: '/meals/breakfast' },
    { id: 2, title: 'Lunch', image: '/images/lunch.jpg', path: '/meals/lunch' },
    { id: 3, title: 'Healthy', image: '/images/healthy.jpg', path: '/meals/healthy' },
    { id: 4, title: 'Appetizers & Snacks', image: '/images/appetizers-snacks.jpg', path: '/meals/appetizers-snacks' },
    { id: 5, title: 'Salads', image: '/images/salads.jpg', path: '/meals/salads' },
    { id: 6, title: 'Side Dishes', image: '/images/side-dishes.jpg', path: '/meals/side-dishes' },
    { id: 7, title: 'Soups', image: '/images/soups.jpg', path: '/meals/soups' },
    { id: 8, title: 'Bread', image: '/images/bread.jpg', path: '/meals/bread' },
    { id: 9, title: 'Drinks', image: '/images/drinks.jpg', path: '/meals/drinks' },
    { id: 10, title: 'Desserts', image: '/images/desserts.jpg', path: '/meals/desserts' },
  ];

  return (
    <div className="all-meals-page">
      <h1>All Meal Recipes</h1>
      <div className="recipes-grid">
        {recipes.map(recipe => (
          <Link
            to={recipe.path}
            key={recipe.id}
            className="recipe-card"
          >
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllMeals; 