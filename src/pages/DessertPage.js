import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Removed
import './DessertPage.css'; // Linking the CSS file

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card allrecipes-style">
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
  </div>
);

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const DessertPage = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true); // Loading state
  const [showAllTopics, setShowAllTopics] = useState(false); // State to manage visibility of all topics

  const recipes = [
    {
      id: 'chocolate-cake',
      title: 'Chocolate Cake',
      image: '/images/desserts/chocolate-cake.jpg',
      rating: 4.9,
      reviews: 1234,
      cookTime: '45 mins',
      difficulty: 'medium',
      author: 'Chef Anna',
    },
    {
      id: 'cheesecake',
      title: 'Cheesecake',
      image: '/images/desserts/cheesecake.jpg',
      rating: 4.8,
      reviews: 987,
      cookTime: '60 mins',
      difficulty: 'hard',
      author: 'Chef Bob',
    },
    // Add more dessert recipes as needed
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("DessertPage component loaded"); // Debugging line
  }, []);

  const allTags = [...new Set(recipes.flatMap(recipe => recipe.tags || []))];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesTag = !activeTag || recipe.tags?.includes(activeTag);
    const matchesDifficulty = activeDifficulty === 'all' || recipe.difficulty === activeDifficulty.toLowerCase();
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesDifficulty && matchesSearch;
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

  const handleSearch = debounce((value) => {
    setSearchTerm(value);
  }, 300); // Debounce for 300ms

  return (
    <div className="post-container allrecipes-layout">
      <div className="post-header">
        <div className="header-content">
          <h1>Dessert Recipes</h1>
          <p className="header-description">
            Discover a variety of delicious dessert recipes that are perfect for any occasion.
          </p>
        </div>
      </div>

      <div className="recipe-filters">
        <h2>Explore Dessert Recipes</h2>
        <input
          type="text"
          placeholder="Search recipes..."
          onChange={(e) => handleSearch(e.target.value)}
          className="search-bar"
        />
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
      </div>

      <div className="popular-topics">
        <h3>Popular Topics:</h3>
        <div className="topic-tags">
          {allTags.filter(tag => tag.toLowerCase() !== 'dessert').map(tag => (
            <button
              key={tag}
              className={`topic-tag ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <button onClick={() => setShowAllTopics(!showAllTopics)}>
          {showAllTopics ? 'Show Less' : 'Show All Topics'}
        </button>
        {showAllTopics && (
          <div className="all-topics">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`topic-tag ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {loading ? ( // Show loading state
        <div className="loading">Loading recipes...</div>
      ) : (
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
                    setSearchTerm('');
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DessertPage; 