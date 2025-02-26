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

const InstantPotRecipes = () => {
  console.log("Instant Pot Recipes component rendered");
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'instant-pot-chicken',
      title: 'Instant Pot Chicken Curry',
      image: '/images/instant-pot-chicken.jpg',
      rating: 4.9,
      reviews: 1500,
      cookTime: '30 mins',
      difficulty: 'easy',
      author: 'Chef Anna',
    },
    {
      id: 'instant-pot-rice',
      title: 'Instant Pot Rice',
      image: '/images/instant-pot-rice.jpg',
      rating: 4.8,
      reviews: 1200,
      cookTime: '10 mins',
      difficulty: 'easy',
      author: 'Chef John',
    },
    // Add more Instant Pot recipes as needed
  ];

  return (
    <div className="post-container allrecipes-layout">
      <div className="post-header">
        <div className="header-content">
          <h1>Instant Pot Recipes</h1>
          <p className="header-description">
            Discover quick and easy Instant Pot recipes for every occasion.
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

export default InstantPotRecipes; 