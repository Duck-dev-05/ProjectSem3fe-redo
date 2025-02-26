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

const IngredientSubstitutions = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'butter-substitute',
      title: 'Butter Substitute',
      image: '/images/butter-substitute.jpg',
      rating: 4.9,
      reviews: 1500,
      cookTime: 'N/A',
      difficulty: 'easy',
      author: 'Chef Anna',
    },
    {
      id: 'egg-substitute',
      title: 'Egg Substitute',
      image: '/images/egg-substitute.jpg',
      rating: 4.8,
      reviews: 1200,
      cookTime: 'N/A',
      difficulty: 'easy',
      author: 'Chef Mike',
    },
    // Add more Ingredient Substitutions recipes as needed
  ];

  return (
    <div className="post-container allrecipes-layout">
      <div className="post-header">
        <div className="header-content">
          <h1>Ingredient Substitutions</h1>
          <p className="header-description">
            Discover useful ingredient substitutions for your cooking needs.
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

export default IngredientSubstitutions; 