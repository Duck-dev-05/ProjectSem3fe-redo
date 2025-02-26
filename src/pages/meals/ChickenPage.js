import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ChickenPage.css'; // Ensure this import is correct

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

const ChickenPage = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const chickenRecipes = [
    {
      id: 'grilled-chicken',
      title: 'Grilled Chicken',
      image: '/images/chicken/grilled-chicken.jpg',
      rating: 4.8,
      reviews: 1200,
      cookTime: '30 mins',
      difficulty: 'easy',
      author: 'Chef Mike',
      description: 'Juicy grilled chicken with a smoky flavor.',
      tags: ['chicken', 'grilled', 'easy']
    },
    {
      id: 'chicken-curry',
      title: 'Chicken Curry',
      image: '/images/chicken/chicken-curry.jpg',
      rating: 4.7,
      reviews: 800,
      cookTime: '45 mins',
      difficulty: 'medium',
      author: 'Chef Lisa',
      description: 'Spicy chicken curry with aromatic spices.',
      tags: ['chicken', 'curry', 'spicy']
    },
    {
      id: 'chicken-salad',
      title: 'Chicken Salad',
      image: '/images/chicken/chicken-salad.jpg',
      rating: 4.6,
      reviews: 600,
      cookTime: '15 mins',
      difficulty: 'easy',
      author: 'Chef Anna',
      description: 'Fresh chicken salad with a tangy dressing.',
      tags: ['chicken', 'salad', 'quick']
    },
    // Add more chicken recipes as needed
  ];

  // Filter and sort logic
  const allTags = [...new Set(chickenRecipes.flatMap(recipe => recipe.tags))];

  const filteredRecipes = chickenRecipes.filter(recipe => {
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
          <h1>Chicken Recipes</h1>
          <p className="header-description">
            Discover a variety of delicious chicken recipes. From grilled to baked, find the perfect dish for any occasion.
          </p>
        </div>
      </div>

      <div className="recipe-filters">
        <h2>Explore Chicken Recipes</h2>
        <div className="filter-options">
          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest First</option>
          </select>

          <div className="filter-pills">
            {['All', 'Easy', 'Medium', 'Hard'].map(difficulty => (
              <button 
                key={difficulty}
                className={`filter-pill ${activeDifficulty === difficulty.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActiveDifficulty(difficulty.toLowerCase())}
              >
                {difficulty === 'All' ? 'All Levels' : difficulty}
              </button>
            ))}
          </div>
        </div>

        <div className="popular-searches">
          <h3>Popular Categories:</h3>
          <div className="search-tags">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`search-tag ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
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

export default ChickenPage; 