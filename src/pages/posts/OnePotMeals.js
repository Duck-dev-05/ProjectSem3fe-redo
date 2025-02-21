import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

// Add this new component for recipe cards
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

const OnePotMeals = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    // Easy Recipes
    {
      id: 'one-pot-pasta',
      title: 'One-Pot Creamy Mushroom Pasta',
      image: '/images/mushroom-pasta.jpg',
      rating: 4.7,
      reviews: 189,
      cookTime: '30 mins',
      difficulty: 'easy',
      ingredients: ['pasta', 'mushrooms', 'cream', 'garlic', 'parmesan'],
      author: 'Chef Marco',
      description: 'A delicious pasta dish that comes together in one pot.',
      tags: ['pasta', 'vegetarian', 'creamy', 'mushroom', 'quick']
    },
    {
      id: 'curry-lentils',
      title: 'Spiced Curry Lentils',
      image: '/images/curry-lentils.jpg',
      rating: 4.6,
      reviews: 178,
      cookTime: '40 mins',
      difficulty: 'easy',
      ingredients: ['red lentils', 'coconut milk', 'curry powder', 'onions', 'garlic'],
      author: 'Chef Priya',
      description: 'Flavorful curry lentils cooked in one pot.',
      tags: ['vegetarian', 'curry', 'healthy', 'budget-friendly']
    },

    // Medium Difficulty Recipes
    {
      id: 'chicken-rice',
      title: 'One-Pot Chicken and Rice',
      image: '/images/chicken-rice.jpg',
      rating: 4.8,
      reviews: 245,
      cookTime: '45 mins',
      difficulty: 'medium',
      ingredients: ['chicken', 'rice', 'vegetables', 'broth', 'herbs'],
      author: 'Chef Sarah',
      description: 'Classic comfort food made simple in one pot.',
      tags: ['chicken', 'rice', 'comfort-food', 'family-friendly']
    },
    {
      id: 'beef-stew',
      title: 'Hearty Beef Stew',
      image: '/images/beef-stew.jpg',
      rating: 4.9,
      reviews: 312,
      cookTime: '2 hrs',
      difficulty: 'medium',
      ingredients: ['beef chunks', 'potatoes', 'carrots', 'onions', 'beef broth'],
      author: 'Chef John',
      description: 'A rich and comforting beef stew that cooks in one pot.',
      tags: ['beef', 'stew', 'comfort-food', 'winter']
    },
    {
      id: 'seafood-paella',
      title: 'One-Pot Seafood Paella',
      image: '/images/seafood-paella.jpg',
      rating: 4.7,
      reviews: 234,
      cookTime: '1 hr',
      difficulty: 'medium',
      ingredients: ['rice', 'shrimp', 'mussels', 'saffron', 'bell peppers'],
      author: 'Chef Miguel',
      description: 'Traditional Spanish paella made in one pan.',
      tags: ['seafood', 'spanish', 'rice', 'special-occasion']
    },

    // Hard Difficulty Recipes
    {
      id: 'bouillabaisse',
      title: 'Classic Bouillabaisse',
      image: '/images/bouillabaisse.jpg',
      rating: 4.9,
      reviews: 156,
      cookTime: '2.5 hrs',
      difficulty: 'hard',
      ingredients: ['various fish', 'shellfish', 'saffron', 'fennel', 'tomatoes'],
      author: 'Chef Pierre',
      description: 'Traditional French seafood stew that\'s worth the effort.',
      tags: ['seafood', 'french', 'gourmet', 'special-occasion']
    },
    {
      id: 'cassoulet',
      title: 'Duck Cassoulet',
      image: '/images/cassoulet.jpg',
      rating: 4.8,
      reviews: 178,
      cookTime: '3 hrs',
      difficulty: 'hard',
      ingredients: ['duck confit', 'white beans', 'sausage', 'breadcrumbs', 'herbs'],
      author: 'Chef Jean',
      description: 'Rich and hearty French bean and meat stew.',
      tags: ['french', 'duck', 'winter', 'gourmet']
    },
    {
      id: 'biryani',
      title: 'One-Pot Lamb Biryani',
      image: '/images/biryani.jpg',
      rating: 4.9,
      reviews: 289,
      cookTime: '2.5 hrs',
      difficulty: 'hard',
      ingredients: ['lamb', 'basmati rice', 'saffron', 'spices', 'onions'],
      author: 'Chef Raj',
      description: 'Aromatic and complex Indian rice dish with tender lamb.',
      tags: ['indian', 'lamb', 'rice', 'special-occasion']
    }
  ];

  // Get unique tags from all recipes
  const allTags = [...new Set(recipes.flatMap(recipe => recipe.tags))];

  // Filter recipes based on active tag and difficulty
  const filteredRecipes = recipes.filter(recipe => {
    const matchesTag = !activeTag || recipe.tags.includes(activeTag);
    const matchesDifficulty = activeDifficulty === 'all' || recipe.difficulty === activeDifficulty.toLowerCase();
    return matchesTag && matchesDifficulty;
  });

  // Sort recipes based on selected option
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.reviews - a.reviews;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return 0; // Assuming recipes are already in chronological order
    }
  });

  const handleTagClick = (tag) => {
    setActiveTag(activeTag === tag ? null : tag);
  };

  const handleDifficultyClick = (difficulty) => {
    setActiveDifficulty(activeDifficulty === difficulty ? 'all' : difficulty);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="post-container allrecipes-layout">
      <div className="post-header">
        <div className="header-content">
          <h1>One-Pot Meals</h1>
          <p className="header-description">
            A big part of simple cooking is minimal cleanup. Here are more than {recipes.length} one-pot dinner recipes 
            that are not short on flavor but keep your kitchen cleanup easy.
          </p>
        </div>
      </div>

      <div className="featured-collections">
        <div className="collection-grid">
          <Link to="/collections/easy-mexican" className="collection-card">
            <img src="/images/collections/mexican-dishes.jpg" alt="Mexican Dishes" />
            <h3>20 Easy Mexican One-Pot Dishes</h3>
          </Link>
          <Link to="/collections/slow-cooker" className="collection-card">
            <img src="/images/collections/slow-cooker.jpg" alt="Slow Cooker Recipes" />
            <h3>5-Ingredient Slow-Cooker Recipes</h3>
          </Link>
          <Link to="/collections/chicken-breast" className="collection-card">
            <img src="/images/collections/chicken-breast.jpg" alt="Chicken Breast Recipes" />
            <h3>12 Top-Rated One-Pot Chicken Recipes</h3>
          </Link>
          <Link to="/collections/casseroles" className="collection-card">
            <img src="/images/collections/casseroles.jpg" alt="Easy Casseroles" />
            <h3>20 Easy One-Pot Casseroles</h3>
          </Link>
        </div>
      </div>

      <div className="recipe-filters">
        <h2>Explore One-Pot Meals</h2>
        <div className="filter-options">
          <select 
            className="sort-select"
            value={sortBy}
            onChange={handleSortChange}
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
                onClick={() => handleDifficultyClick(difficulty.toLowerCase())}
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
                onClick={() => handleTagClick(tag)}
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

export default OnePotMeals; 