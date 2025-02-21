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

const QuickEasyDinners = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'pan-seared-tilapia',
      title: 'Pan-Seared Tilapia',
      image: '/images/pan-seared-tilapia.jpg',
      rating: 4.8,
      reviews: 841,
      cookTime: '15 mins',
      difficulty: 'easy',
      ingredients: ['tilapia fillets', 'butter', 'lemon', 'garlic', 'parsley'],
      author: 'Chef Sarah',
      description: 'Quick and flaky tilapia fillets ready in minutes.',
      tags: ['seafood', 'quick', 'healthy', 'low-carb']
    },
    {
      id: 'salsa-chicken',
      title: 'Salsa Chicken',
      image: '/images/salsa-chicken.jpg',
      rating: 4.9,
      reviews: 4747,
      cookTime: '25 mins',
      difficulty: 'easy',
      ingredients: ['chicken breasts', 'salsa', 'cheese', 'taco seasoning'],
      author: 'Chef Maria',
      description: 'Zesty Mexican-inspired chicken dish.',
      tags: ['chicken', 'mexican', 'quick', 'family-friendly']
    },
    {
      id: 'ground-beef-cabbage',
      title: 'Ground Beef and Cabbage',
      image: '/images/beef-cabbage.jpg',
      rating: 4.7,
      reviews: 481,
      cookTime: '20 mins',
      difficulty: 'easy',
      ingredients: ['ground beef', 'cabbage', 'onion', 'garlic', 'seasonings'],
      author: 'Chef John',
      description: 'Simple and satisfying one-pan dinner.',
      tags: ['beef', 'low-carb', 'budget-friendly', 'quick']
    },
    {
      id: 'shrimp-scampi',
      title: 'Quick Shrimp Scampi',
      image: '/images/shrimp-scampi.jpg',
      rating: 4.9,
      reviews: 2103,
      cookTime: '15 mins',
      difficulty: 'easy',
      ingredients: ['shrimp', 'garlic', 'butter', 'white wine', 'parsley'],
      author: 'Chef Michael',
      description: 'Classic shrimp scampi ready in minutes.',
      tags: ['seafood', 'pasta', 'quick', 'italian']
    },
    {
      id: 'stir-fry-chicken',
      title: '15-Minute Chicken Stir-Fry',
      image: '/images/stir-fry-chicken.jpg',
      rating: 4.7,
      reviews: 1567,
      cookTime: '15 mins',
      difficulty: 'easy',
      ingredients: ['chicken breast', 'mixed vegetables', 'soy sauce', 'ginger', 'garlic'],
      author: 'Chef Lee',
      description: 'Quick and healthy chicken stir-fry.',
      tags: ['chicken', 'asian', 'healthy', 'quick']
    },
    {
      id: 'taco-skillet',
      title: 'One-Skillet Taco Dinner',
      image: '/images/taco-skillet.jpg',
      rating: 4.8,
      reviews: 923,
      cookTime: '20 mins',
      difficulty: 'easy',
      ingredients: ['ground beef', 'taco seasoning', 'rice', 'cheese', 'tomatoes'],
      author: 'Chef Rosa',
      description: 'All your favorite taco flavors in one pan.',
      tags: ['beef', 'mexican', 'one-pan', 'family-friendly']
    }
  ];

  const featuredCollections = [
    {
      id: 'weeknight-dinners',
      title: '30 Quick Weeknight Dinner Ideas',
      image: '/images/collections/weeknight-dinners.jpg',
      path: '/collections/weeknight-dinners'
    },
    {
      id: 'sheet-pan',
      title: '15 Easy Sheet Pan Dinners',
      image: '/images/collections/sheet-pan.jpg',
      path: '/collections/sheet-pan'
    },
    {
      id: 'skillet-meals',
      title: '20-Minute Skillet Meals',
      image: '/images/collections/skillet-meals.jpg',
      path: '/collections/skillet-meals'
    },
    {
      id: 'pasta-dishes',
      title: 'Quick & Easy Pasta Dishes',
      image: '/images/collections/pasta-dishes.jpg',
      path: '/collections/quick-pasta'
    }
  ];

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
          <h1>Quick & Easy Dinners</h1>
          <p className="header-description">
            Short on time? No problem! Browse our collection of easy dinner recipes ready in 30 minutes or less. 
            Perfect for busy weeknights when you need dinner on the table fast.
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

export default QuickEasyDinners; 