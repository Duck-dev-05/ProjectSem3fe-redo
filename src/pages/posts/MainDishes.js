import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

const RecipeCard = ({ recipe }) => (
  <Link to={`/recipe/${recipe.id}`} className="recipe-card allrecipes-style">
    <div className="recipe-image-wrapper">
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-rating-overlay">
        <div className="rating-badge">
          <span className="stars">{'★'.repeat(Math.floor(recipe.rating))}</span>
          <span className="rating-count">({recipe.reviews})</span>
        </div>
      </div>
    </div>
    <div className="recipe-content">
      <h2 className="recipe-title">{recipe.title}</h2>
      <div className="recipe-meta">
        <div className="recipe-stats">
          <span className="prep-time">
            <i className="far fa-clock"></i> {recipe.cookTime}
          </span>
          <span className="difficulty-label">
            <i className="fas fa-chart-line"></i> {recipe.difficulty}
          </span>
        </div>
        <div className="author-byline">
          By <span className="author-name">{recipe.author}</span>
        </div>
      </div>
    </div>
  </Link>
);

const MainDishes = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'spaghetti-bolognese',
      title: 'Spaghetti Bolognese',
      image: '/images/spaghetti-bolognese.jpg',
      rating: 4.6,
      reviews: 180,
      cookTime: '30 mins',
      difficulty: 'easy',
      author: 'Chef Marco',
      description: 'A classic Italian dish that everyone loves.',
    },
    {
      id: 'chicken-curry',
      title: 'Chicken Curry',
      image: '/images/chicken-curry.jpg',
      rating: 4.7,
      reviews: 220,
      cookTime: '45 mins',
      difficulty: 'medium',
      author: 'Chef Priya',
      description: 'A flavorful chicken curry that is perfect with rice.',
    },
    // Add more recipes as needed
  ];

  const sortedRecipes = recipes; // Implement sorting logic if needed

  return (
    <div className="post-container">
      <div className="post-header">
        <h1>Main Dishes</h1>
        <p>Hearty and satisfying meals for any occasion!</p>
      </div>

      <div className="filters-bar">
        <select className="filter-select" onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Newest First</option>
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
        </select>

        <div className="difficulty-filters">
          <button className="filter-button active">All</button>
          <button className="filter-button">Easy</button>
          <button className="filter-button">Medium</button>
          <button className="filter-button">Hard</button>
        </div>
      </div>

      <div className="recipes-grid">
        {sortedRecipes.length > 0 ? (
          sortedRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className="no-results allrecipes-style">
            <div className="no-results-content">
              <i className="fas fa-search"></i>
              <h3>No Recipes Found</h3>
              <p>Try different filters or browse all recipes</p>
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setActiveTag(null);
                  setActiveDifficulty('all');
                  setSortBy('popular');
                }}
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainDishes; 