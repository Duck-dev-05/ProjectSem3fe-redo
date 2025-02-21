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

const FamilyDinners = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const recipes = [
    {
      id: 'family-meatloaf',
      title: 'Mom\'s Famous Meatloaf',
      image: '/images/family-meatloaf.jpg',
      rating: 4.9,
      reviews: 3892,
      cookTime: '1 hr 15 mins',
      difficulty: 'easy',
      ingredients: ['ground beef', 'onion', 'breadcrumbs', 'eggs', 'ketchup glaze'],
      author: 'Chef Sarah',
      description: 'A classic family recipe that\'s been passed down for generations.',
      tags: ['beef', 'comfort-food', 'kid-friendly', 'make-ahead']
    },
    {
      id: 'baked-ziti',
      title: 'Big-Batch Baked Ziti',
      image: '/images/baked-ziti.jpg',
      rating: 4.8,
      reviews: 2567,
      cookTime: '1 hr',
      difficulty: 'easy',
      ingredients: ['ziti pasta', 'ground beef', 'ricotta', 'mozzarella', 'marinara'],
      author: 'Chef Maria',
      description: 'Feed a crowd with this cheesy pasta bake.',
      tags: ['pasta', 'italian', 'crowd-pleaser', 'budget-friendly']
    },
    {
      id: 'ranch-chicken',
      title: 'Crispy Ranch Chicken Tenders',
      image: '/images/ranch-chicken.jpg',
      rating: 4.9,
      reviews: 4521,
      cookTime: '35 mins',
      difficulty: 'easy',
      ingredients: ['chicken tenders', 'ranch seasoning', 'breadcrumbs', 'butter', 'garlic'],
      author: 'Chef Mike',
      description: 'Better than restaurant chicken tenders that kids love!',
      tags: ['chicken', 'kid-favorite', 'crowd-pleaser', 'quick']
    },
    {
      id: 'shepherd-pie',
      title: 'Family-Size Shepherd\'s Pie',
      image: '/images/shepherd-pie.jpg',
      rating: 4.8,
      reviews: 3156,
      cookTime: '1 hr 10 mins',
      difficulty: 'medium',
      ingredients: ['ground lamb', 'potatoes', 'vegetables', 'gravy', 'cheese'],
      author: 'Chef John',
      description: 'Hearty comfort food that feeds the whole family.',
      tags: ['comfort-food', 'british', 'make-ahead', 'winter']
    },
    {
      id: 'enchilada-casserole',
      title: 'Easy Enchilada Casserole',
      image: '/images/enchilada-casserole.jpg',
      rating: 4.7,
      reviews: 2890,
      cookTime: '50 mins',
      difficulty: 'easy',
      ingredients: ['tortillas', 'chicken', 'enchilada sauce', 'cheese', 'beans'],
      author: 'Chef Rosa',
      description: 'A family-friendly twist on traditional enchiladas.',
      tags: ['mexican', 'casserole', 'kid-friendly', 'budget-friendly']
    },
    {
      id: 'sloppy-joes',
      title: 'Crowd-Pleasing Sloppy Joes',
      image: '/images/sloppy-joes.jpg',
      rating: 4.8,
      reviews: 3245,
      cookTime: '30 mins',
      difficulty: 'easy',
      ingredients: ['ground beef', 'onion', 'bell pepper', 'tomato sauce', 'buns'],
      author: 'Chef Michael',
      description: 'Classic sloppy joes that kids and adults both love.',
      tags: ['beef', 'sandwich', 'kid-favorite', 'quick']
    },
    {
      id: 'chicken-rice-casserole',
      title: 'Creamy Chicken & Rice Casserole',
      image: '/images/chicken-rice-casserole.jpg',
      rating: 4.9,
      reviews: 4127,
      cookTime: '55 mins',
      difficulty: 'easy',
      ingredients: ['chicken', 'rice', 'cream soup', 'vegetables', 'cheese'],
      author: 'Chef Lisa',
      description: 'The ultimate comfort food casserole for family dinner.',
      tags: ['chicken', 'casserole', 'comfort-food', 'make-ahead']
    }
  ];

  const featuredCollections = [
    {
      id: 'picky-eaters',
      title: 'Picky Eater Approved Meals',
      image: '/images/collections/picky-eaters.jpg',
      path: '/collections/picky-eaters'
    },
    {
      id: 'big-batch',
      title: 'Big-Batch Dinner Ideas',
      image: '/images/collections/big-batch.jpg',
      path: '/collections/big-batch'
    },
    {
      id: 'budget-family',
      title: 'Budget-Friendly Family Meals',
      image: '/images/collections/budget-family.jpg',
      path: '/collections/budget-family'
    },
    {
      id: 'sunday-dinner',
      title: 'Sunday Family Dinner Classics',
      image: '/images/collections/sunday-dinner.jpg',
      path: '/collections/sunday-dinner'
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
          <h1>Family-Favorite Dinner Recipes</h1>
          <p className="header-description">
            Discover tried-and-true family dinner recipes that bring everyone to the table! 
            From kid-approved favorites to crowd-pleasing casseroles, these hearty meals are 
            perfect for feeding the whole family. Find budget-friendly options, make-ahead dishes, 
            and recipes that'll have everyone asking for seconds.
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
        <h2>Explore Family Recipes</h2>
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

export default FamilyDinners; 