import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../posts/Posts.css';

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

const AirFryerRecipes = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'air-fryer-chicken',
      title: 'Air Fryer Chicken Wings',
      image: '/images/air-fryer-chicken.jpg',
      rating: 4.9,
      reviews: 1500,
      cookTime: '25 mins',
      difficulty: 'easy',
      author: 'Chef Mike',
    },
    {
      id: 'air-fryer-fries',
      title: 'Crispy Air Fryer Fries',
      image: '/images/air-fryer-fries.jpg',
      rating: 4.8,
      reviews: 1200,
      cookTime: '20 mins',
      difficulty: 'easy',
      author: 'Chef Sarah',
    },
    // Add more Air Fryer recipes as needed
  ];

  return (
    <div className="post-container allrecipes-layout">
      <div className="post-header">
        <div className="header-content">
          <h1>Air Fryer Recipes</h1>
          <p className="header-description">
            Discover quick and easy Air Fryer recipes for every occasion.
          </p>
        </div>
      </div>

      <div className="recipes-grid allrecipes-grid">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default AirFryerRecipes; 