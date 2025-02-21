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

const BreakfastBrunch = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'classic-pancakes',
      title: 'Fluffy Buttermilk Pancakes',
      image: '/images/buttermilk-pancakes.jpg',
      rating: 4.9,
      reviews: 6234,
      cookTime: '25 mins',
      difficulty: 'easy',
      ingredients: ['buttermilk', 'flour', 'eggs', 'butter', 'vanilla'],
      author: 'Chef Sarah',
      description: 'Light and fluffy pancakes that are perfect every time.',
      tags: ['breakfast', 'classic', 'kid-friendly', 'weekend']
    },
    {
      id: 'breakfast-casserole',
      title: 'Overnight Breakfast Casserole',
      image: '/images/breakfast-casserole.jpg',
      rating: 4.8,
      reviews: 3421,
      cookTime: '1 hr',
      difficulty: 'medium',
      ingredients: ['eggs', 'sausage', 'bread', 'cheese', 'milk'],
      author: 'Chef John',
      description: 'Make-ahead breakfast casserole perfect for holidays.',
      tags: ['make-ahead', 'casserole', 'crowd-pleaser', 'holiday']
    },
    {
      id: 'french-toast',
      title: 'Perfect French Toast',
      image: '/images/french-toast.jpg',
      rating: 4.9,
      reviews: 5123,
      cookTime: '20 mins',
      difficulty: 'easy',
      ingredients: ['bread', 'eggs', 'milk', 'vanilla', 'cinnamon'],
      author: 'Chef Maria',
      description: 'Classic French toast with a perfectly crispy exterior.',
      tags: ['breakfast', 'brunch', 'classic', 'quick']
    }
  ];

  const featuredCollections = [
    {
      id: 'weekend-brunch',
      title: 'Weekend Brunch Favorites',
      image: '/images/collections/weekend-brunch.jpg',
      path: '/collections/weekend-brunch'
    },
    {
      id: 'quick-breakfast',
      title: '15-Minute Breakfast Ideas',
      image: '/images/collections/quick-breakfast.jpg',
      path: '/collections/quick-breakfast'
    },
    {
      id: 'healthy-breakfast',
      title: 'Healthy Breakfast Recipes',
      image: '/images/collections/healthy-breakfast.jpg',
      path: '/collections/healthy-breakfast'
    },
    {
      id: 'breakfast-prep',
      title: 'Make-Ahead Breakfast',
      image: '/images/collections/breakfast-prep.jpg',
      path: '/collections/breakfast-prep'
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
          <h1>Breakfast & Brunch Recipes</h1>
          <p className="header-description">
            Start your day right with our collection of breakfast and brunch recipes. 
            From quick weekday breakfasts to leisurely weekend brunches, find the perfect 
            morning meal for any occasion.
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
        <h2>Explore Breakfast Recipes</h2>
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

export default BreakfastBrunch; 