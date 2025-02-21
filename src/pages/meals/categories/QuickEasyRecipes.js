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

const QuickEasyRecipes = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'quick-pasta',
      title: '15-Minute Garlic Pasta',
      image: '/images/quick-pasta.jpg',
      rating: 4.9,
      reviews: 3567,
      cookTime: '15 mins',
      difficulty: 'easy',
      ingredients: ['pasta', 'garlic', 'olive oil', 'parmesan', 'red pepper flakes'],
      author: 'Chef Maria',
      description: 'Simple and delicious pasta ready in minutes.',
      tags: ['pasta', 'quick', 'vegetarian', 'budget-friendly']
    },
    {
      id: 'quesadillas',
      title: 'Quick Chicken Quesadillas',
      image: '/images/quesadillas.jpg',
      rating: 4.8,
      reviews: 2891,
      cookTime: '20 mins',
      difficulty: 'easy',
      ingredients: ['tortillas', 'chicken', 'cheese', 'peppers', 'onions'],
      author: 'Chef John',
      description: 'Crispy quesadillas perfect for busy weeknights.',
      tags: ['mexican', 'chicken', 'quick', 'kid-friendly']
    },
    {
      id: 'stir-fry',
      title: 'Vegetable Stir-Fry',
      image: '/images/stir-fry.jpg',
      rating: 4.7,
      reviews: 2156,
      cookTime: '15 mins',
      difficulty: 'easy',
      ingredients: ['mixed vegetables', 'soy sauce', 'garlic', 'ginger', 'rice'],
      author: 'Chef Lee',
      description: 'Healthy and quick vegetable stir-fry.',
      tags: ['asian', 'vegetarian', 'healthy', 'quick']
    }
  ];

  const featuredCollections = [
    {
      id: '15-minute',
      title: '15-Minute Meals',
      image: '/images/collections/15-minute.jpg',
      path: '/collections/15-minute'
    },
    {
      id: 'no-cook',
      title: 'No-Cook Recipes',
      image: '/images/collections/no-cook.jpg',
      path: '/collections/no-cook'
    },
    {
      id: 'sheet-pan',
      title: 'Sheet Pan Dinners',
      image: '/images/collections/sheet-pan.jpg',
      path: '/collections/sheet-pan'
    },
    {
      id: '5-ingredient',
      title: '5-Ingredient Recipes',
      image: '/images/collections/5-ingredient.jpg',
      path: '/collections/5-ingredient'
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
          <h1>Quick & Easy Recipes</h1>
          <p className="header-description">
            Short on time? These quick and easy recipes are ready in 30 minutes or less, 
            perfect for busy weeknights or when you need a meal in a hurry.
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
        <h2>Explore Quick & Easy Recipes</h2>
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

export default QuickEasyRecipes; 