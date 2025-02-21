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

const Appetizers = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'spinach-artichoke-dip',
      title: 'Creamy Spinach Artichoke Dip',
      image: '/images/spinach-dip.jpg',
      rating: 4.9,
      reviews: 4567,
      cookTime: '35 mins',
      difficulty: 'easy',
      ingredients: ['spinach', 'artichokes', 'cream cheese', 'parmesan', 'garlic'],
      author: 'Chef Maria',
      description: 'Hot and cheesy dip that disappears fast!',
      tags: ['dips', 'party', 'vegetarian', 'crowd-pleaser']
    },
    {
      id: 'bruschetta',
      title: 'Classic Tomato Bruschetta',
      image: '/images/bruschetta.jpg',
      rating: 4.8,
      reviews: 3289,
      cookTime: '20 mins',
      difficulty: 'easy',
      ingredients: ['tomatoes', 'basil', 'garlic', 'baguette', 'olive oil'],
      author: 'Chef John',
      description: 'Simple Italian appetizer that\'s always a hit.',
      tags: ['italian', 'quick', 'vegetarian', 'party']
    },
    {
      id: 'buffalo-wings',
      title: 'Crispy Buffalo Wings',
      image: '/images/buffalo-wings.jpg',
      rating: 4.9,
      reviews: 5678,
      cookTime: '45 mins',
      difficulty: 'medium',
      ingredients: ['chicken wings', 'buffalo sauce', 'butter', 'garlic powder', 'ranch'],
      author: 'Chef Mike',
      description: 'Restaurant-style wings perfect for game day.',
      tags: ['chicken', 'spicy', 'game-day', 'party']
    }
  ];

  const featuredCollections = [
    {
      id: 'party-apps',
      title: 'Party Appetizers',
      image: '/images/collections/party-apps.jpg',
      path: '/collections/party-appetizers'
    },
    {
      id: 'quick-apps',
      title: '15-Minute Appetizers',
      image: '/images/collections/quick-apps.jpg',
      path: '/collections/quick-appetizers'
    },
    {
      id: 'healthy-apps',
      title: 'Healthy Appetizers',
      image: '/images/collections/healthy-apps.jpg',
      path: '/collections/healthy-appetizers'
    },
    {
      id: 'dips-spreads',
      title: 'Dips and Spreads',
      image: '/images/collections/dips-spreads.jpg',
      path: '/collections/dips-spreads'
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
          <h1>Appetizer Recipes</h1>
          <p className="header-description">
            Kick off your party with these delicious appetizer recipes! From quick and easy dips 
            to elegant hors d'oeuvres, find the perfect starter for any occasion.
          </p>
        </div>
      </div>

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
        <h2>Explore Appetizer Recipes</h2>
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

export default Appetizers; 