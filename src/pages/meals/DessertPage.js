import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DessertPage.css'; // Ensure you have this CSS file for styling

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
      </div>
    </div>
  </Link>
);

const DessertPage = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const dessertRecipes = [
    {
      id: 1,
      title: 'Chocolate Cake',
      description: 'A rich and moist chocolate cake.',
      image: '/images/desserts/chocolate-cake.jpg',
      rating: 4.5,
      reviews: 150,
      cookTime: '30 mins',
      difficulty: 'easy',
    },
    {
      id: 2,
      title: 'Apple Pie',
      description: 'Classic apple pie with a flaky crust.',
      image: '/images/desserts/apple-pie.jpg',
      rating: 4.7,
      reviews: 200,
      cookTime: '45 mins',
      difficulty: 'medium',
    },
    {
      id: 3,
      title: 'Cheesecake',
      description: 'Creamy cheesecake with a graham cracker crust.',
      image: '/images/desserts/cheesecake.jpg',
      rating: 4.8,
      reviews: 300,
      cookTime: '60 mins',
      difficulty: 'hard',
    },
    // Add more dessert recipes as needed
  ];

  const filteredRecipes = dessertRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = activeDifficulty === 'all' || recipe.difficulty === activeDifficulty;
    return matchesSearch && matchesDifficulty;
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
    </div>
  );
};

export default DessertPage; 