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

const HealthyRecipes = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'quinoa-bowl',
      title: 'Mediterranean Quinoa Bowl',
      image: '/images/quinoa-bowl.jpg',
      rating: 4.9,
      reviews: 3245,
      cookTime: '25 mins',
      difficulty: 'easy',
      author: 'Chef Sarah',
      description: 'Protein-packed quinoa bowl with fresh vegetables.',
      tags: ['vegetarian', 'mediterranean', 'high-protein', 'gluten-free']
    },
    {
      id: 'salmon-kale',
      title: 'Grilled Salmon with Kale',
      image: '/images/salmon-kale.jpg',
      rating: 4.8,
      reviews: 2891,
      cookTime: '30 mins',
      difficulty: 'medium',
      author: 'Chef Michael',
      description: 'Omega-3 rich salmon with superfood kale.',
      tags: ['seafood', 'low-carb', 'keto', 'high-protein']
    },
    // Add more healthy recipes as needed
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
          <h1>Healthy Recipes</h1>
          <p className="header-description">
            Nourish your body with our collection of healthy recipes. From low-carb and keto to 
            vegetarian and high-protein options, find nutritious meals that don't compromise on flavor.
          </p>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthyRecipes; 