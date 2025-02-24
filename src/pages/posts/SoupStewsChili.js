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

const SoupStewsChili = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'hearty-beef-stew',
      title: 'Hearty Beef and Vegetable Stew',
      image: '/images/beef-stew.jpg',
      rating: 4.5,
      reviews: 120,
      cookTime: '2 hours',
      difficulty: 'medium',
      author: 'Chef John',
      description: 'A classic beef stew that warms the soul.',
    },
    // Add more recipes as needed
  ];

  const featuredCollections = [
    {
      id: 'winter-soups',
      title: 'Cozy Winter Soups & Stews',
      image: '/images/collections/winter-soups.jpg',
      path: '/collections/winter-soups'
    },
    {
      id: 'chili-varieties',
      title: 'World of Chili Recipes',
      image: '/images/collections/chili-varieties.jpg',
      path: '/collections/chili-varieties'
    },
    {
      id: 'quick-soups',
      title: '30-Minute Soup Recipes',
      image: '/images/collections/quick-soups.jpg',
      path: '/collections/quick-soups'
    },
    {
      id: 'healthy-soups',
      title: 'Healthy Soups & Stews',
      image: '/images/collections/healthy-soups.jpg',
      path: '/collections/healthy-soups'
    }
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
          <h1>Soups, Stews & Chili Recipes</h1>
          <p className="header-description">
            From comforting chicken noodle to hearty beef stew, find the perfect soup, stew, or chili recipe 
            for any occasion. Whether you're looking for a quick weeknight dinner or a slow-simmered weekend 
            project, we've got you covered with these warming, satisfying recipes.
          </p>
        </div>
      </div>

      {/* Rest of the component structure remains the same */}
      <div className="featured-collections">
        <div className="collection-grid">
          {featuredCollections.map(collection => (
            <Link 
              key={collection.id}
              to={collection.path} 
              className="collection-card"
            >
              <img src={collection.image} alt={collection.title} />
              <h3>{collection.title}</h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="recipe-filters">
        <h2>Explore Soup & Stew Recipes</h2>
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
            {['All', 'Easy', 'Medium'].map(difficulty => (
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

export default SoupStewsChili; 