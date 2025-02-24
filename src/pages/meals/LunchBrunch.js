import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../posts/Posts.css';

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

const LunchBrunch = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'chicken-salad',
      title: 'Classic Chicken Salad',
      image: '/images/chicken-salad.jpg',
      rating: 4.7,
      reviews: 1500,
      cookTime: '15 mins',
      difficulty: 'easy',
      author: 'Chef Anna',
      description: 'A quick and easy chicken salad perfect for lunch.',
      tags: ['lunch', 'salad', 'quick'],
    },
    {
      id: 'veggie-wrap',
      title: 'Veggie Wrap',
      image: '/images/veggie-wrap.jpg',
      rating: 4.5,
      reviews: 1200,
      cookTime: '10 mins',
      difficulty: 'easy',
      author: 'Chef Mike',
      description: 'A healthy veggie wrap that\'s great for lunch on the go.',
      tags: ['lunch', 'healthy', 'quick'],
    },
    // Add more recipes as needed
  ];

  // Filter and sort logic
  const allTags = [...new Set(recipes.flatMap(recipe => recipe.tags))];
  
  const filteredRecipes = recipes.filter(recipe => {
    const matchesTag = !activeTag || recipe.tags.includes(activeTag);
    const matchesDifficulty = activeDifficulty === 'all' || recipe.difficulty === activeDifficulty.toLowerCase();
    return matchesTag && matchesDifficulty;
  });

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.reviews - a.reviews;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return 0;
    }
  });

  return (
    <div className="post-container allrecipes-layout">
      <div className="post-header">
        <div className="header-content">
          <h1>Lunch Recipes</h1>
          <p className="header-description">
            Discover delicious lunch recipes that are quick and easy to prepare.
          </p>
        </div>
      </div>

      <div className="recipes-grid allrecipes-grid">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LunchBrunch; 