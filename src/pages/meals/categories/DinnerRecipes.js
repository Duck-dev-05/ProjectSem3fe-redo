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

const DinnerRecipes = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'chicken-parmesan',
      title: 'Classic Chicken Parmesan',
      image: '/images/chicken-parmesan.jpg',
      rating: 4.9,
      reviews: 3245,
      cookTime: '45 mins',
      difficulty: 'medium',
      ingredients: ['chicken breasts', 'marinara sauce', 'mozzarella', 'breadcrumbs', 'parmesan'],
      author: 'Chef Maria',
      description: 'Restaurant-quality chicken parmesan at home.',
      tags: ['italian', 'chicken', 'family-favorite', 'comfort-food']
    },
    {
      id: 'beef-stir-fry',
      title: 'Easy Beef Stir-Fry',
      image: '/images/beef-stir-fry.jpg',
      rating: 4.8,
      reviews: 2156,
      cookTime: '30 mins',
      difficulty: 'easy',
      ingredients: ['beef strips', 'mixed vegetables', 'soy sauce', 'garlic', 'ginger'],
      author: 'Chef John',
      description: 'Quick and flavorful weeknight stir-fry.',
      tags: ['asian', 'beef', 'quick', 'healthy']
    },
    {
      id: 'baked-salmon',
      title: 'Lemon Herb Baked Salmon',
      image: '/images/baked-salmon.jpg',
      rating: 4.9,
      reviews: 1893,
      cookTime: '25 mins',
      difficulty: 'easy',
      ingredients: ['salmon fillets', 'lemon', 'herbs', 'butter', 'garlic'],
      author: 'Chef Sarah',
      description: 'Perfect baked salmon every time.',
      tags: ['seafood', 'healthy', 'quick', 'low-carb']
    }
  ];

  const featuredCollections = [
    {
      id: 'family-dinners',
      title: 'Family-Friendly Dinners',
      image: '/images/collections/family-dinners.jpg',
      path: '/collections/family-dinners'
    },
    {
      id: 'quick-dinners',
      title: '30-Minute Dinners',
      image: '/images/collections/quick-dinners.jpg',
      path: '/collections/quick-dinners'
    },
    {
      id: 'healthy-dinners',
      title: 'Healthy Dinner Ideas',
      image: '/images/collections/healthy-dinners.jpg',
      path: '/collections/healthy-dinners'
    },
    {
      id: 'budget-dinners',
      title: 'Budget-Friendly Dinners',
      image: '/images/collections/budget-dinners.jpg',
      path: '/collections/budget-dinners'
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
          <h1>Dinner Recipes</h1>
          <p className="header-description">
            Find the perfect dinner recipe for tonight. From quick weeknight meals to 
            weekend dinner party showstoppers, we've got all the dinner inspiration you need.
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
        <h2>Explore Dinner Recipes</h2>
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

export default DinnerRecipes; 