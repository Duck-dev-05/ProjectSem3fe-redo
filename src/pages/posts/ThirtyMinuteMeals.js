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

const ThirtyMinuteMeals = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'chicken-stir-fry',
      title: 'Easy Chicken Stir-Fry',
      image: '/images/chicken-stir-fry.jpg',
      rating: 4.8,
      reviews: 2103,
      cookTime: '25 mins',
      difficulty: 'easy',
      ingredients: ['chicken breast', 'mixed vegetables', 'soy sauce', 'ginger', 'garlic'],
      author: 'Chef Lee',
      description: 'A colorful and quick weeknight dinner.',
      tags: ['asian', 'chicken', 'healthy', 'weeknight']
    },
    {
      id: 'shrimp-pasta',
      title: 'Garlic Shrimp Pasta',
      image: '/images/shrimp-pasta.jpg',
      rating: 4.9,
      reviews: 1847,
      cookTime: '30 mins',
      difficulty: 'medium',
      ingredients: ['shrimp', 'pasta', 'garlic', 'white wine', 'parsley'],
      author: 'Chef Maria',
      description: 'Restaurant-quality pasta in 30 minutes.',
      tags: ['pasta', 'seafood', 'italian', 'date-night']
    },
    {
      id: 'taco-bowls',
      title: 'Quick Taco Bowls',
      image: '/images/taco-bowls.jpg',
      rating: 4.7,
      reviews: 1256,
      cookTime: '30 mins',
      difficulty: 'easy',
      ingredients: ['ground beef', 'rice', 'beans', 'taco seasoning', 'toppings'],
      author: 'Chef Rosa',
      description: 'Customizable Mexican-inspired bowls.',
      tags: ['mexican', 'beef', 'family-friendly', 'customizable']
    }
  ];

  const featuredCollections = [
    {
      id: 'pasta-30min',
      title: '15 Pasta Dishes Ready in 30 Minutes',
      image: '/images/collections/quick-pasta.jpg',
      path: '/collections/quick-pasta'
    },
    {
      id: 'chicken-30min',
      title: 'Quick Chicken Dinner Ideas',
      image: '/images/collections/chicken-quick.jpg',
      path: '/collections/quick-chicken'
    },
    {
      id: 'vegetarian-30min',
      title: '30-Minute Vegetarian Meals',
      image: '/images/collections/vegetarian-quick.jpg',
      path: '/collections/vegetarian-quick'
    },
    {
      id: 'family-30min',
      title: 'Family-Friendly 30-Minute Dinners',
      image: '/images/collections/family-quick.jpg',
      path: '/collections/family-quick'
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
          <h1>30-Minute Meals</h1>
          <p className="header-description">
            Dinner doesn't have to take all night! These delicious meals are ready in 30 minutes or less, 
            perfect for those busy weeknights when time is tight but you still want something homemade.
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
        <h2>Explore 30-Minute Recipes</h2>
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

export default ThirtyMinuteMeals; 