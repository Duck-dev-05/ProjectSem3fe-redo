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
      ingredients: ['quinoa', 'chickpeas', 'cucumber', 'tomatoes', 'feta'],
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
      ingredients: ['salmon fillet', 'kale', 'lemon', 'garlic', 'olive oil'],
      author: 'Chef Michael',
      description: 'Omega-3 rich salmon with superfood kale.',
      tags: ['seafood', 'low-carb', 'keto', 'high-protein']
    },
    {
      id: 'buddha-bowl',
      title: 'Rainbow Buddha Bowl',
      image: '/images/buddha-bowl.jpg',
      rating: 4.7,
      reviews: 2156,
      cookTime: '20 mins',
      difficulty: 'easy',
      ingredients: ['brown rice', 'sweet potato', 'avocado', 'spinach', 'tahini'],
      author: 'Chef Lisa',
      description: 'Colorful bowl packed with nutrients.',
      tags: ['vegan', 'gluten-free', 'meal-prep', 'low-calorie']
    },
    {
      id: 'chicken-salad',
      title: 'Greek Chicken Salad',
      image: '/images/greek-chicken.jpg',
      rating: 4.9,
      reviews: 1893,
      cookTime: '25 mins',
      difficulty: 'easy',
      ingredients: ['chicken breast', 'romaine', 'olives', 'red onion', 'greek dressing'],
      author: 'Chef Maria',
      description: 'Light and protein-rich Mediterranean salad.',
      tags: ['mediterranean', 'low-carb', 'high-protein', 'salad']
    },
    {
      id: 'cauliflower-rice-bowl',
      title: 'Cauliflower Rice Stir-Fry',
      image: '/images/cauliflower-rice.jpg',
      rating: 4.8,
      reviews: 2567,
      cookTime: '20 mins',
      difficulty: 'easy',
      ingredients: ['cauliflower rice', 'mixed vegetables', 'tofu', 'soy sauce', 'sesame oil'],
      author: 'Chef Lee',
      description: 'Low-carb alternative to traditional stir-fry.',
      tags: ['low-carb', 'vegetarian', 'keto', 'asian']
    },
    {
      id: 'turkey-lettuce-wraps',
      title: 'Asian Turkey Lettuce Wraps',
      image: '/images/turkey-wraps.jpg',
      rating: 4.7,
      reviews: 1987,
      cookTime: '25 mins',
      difficulty: 'easy',
      ingredients: ['ground turkey', 'lettuce leaves', 'carrots', 'water chestnuts', 'hoisin sauce'],
      author: 'Chef John',
      description: 'Light and flavorful lettuce wraps.',
      tags: ['low-carb', 'high-protein', 'asian', 'quick']
    },
    {
      id: 'lentil-soup',
      title: 'Hearty Lentil Soup',
      image: '/images/lentil-soup.jpg',
      rating: 4.9,
      reviews: 3102,
      cookTime: '45 mins',
      difficulty: 'easy',
      ingredients: ['red lentils', 'carrots', 'spinach', 'onion', 'vegetable broth'],
      author: 'Chef Maria',
      description: 'Protein-rich vegetarian soup.',
      tags: ['vegetarian', 'high-protein', 'soup', 'meal-prep']
    },
    {
      id: 'sweet-potato-black-bean',
      title: 'Sweet Potato & Black Bean Bowl',
      image: '/images/sweet-potato-bowl.jpg',
      rating: 4.8,
      reviews: 2345,
      cookTime: '35 mins',
      difficulty: 'easy',
      ingredients: ['sweet potatoes', 'black beans', 'quinoa', 'avocado', 'lime'],
      author: 'Chef Sarah',
      description: 'Plant-based bowl full of fiber and protein.',
      tags: ['vegan', 'gluten-free', 'high-fiber', 'meal-prep']
    },
    {
      id: 'zucchini-noodles',
      title: 'Garlic Shrimp Zucchini Noodles',
      image: '/images/zucchini-noodles.jpg',
      rating: 4.7,
      reviews: 1876,
      cookTime: '20 mins',
      difficulty: 'easy',
      ingredients: ['zucchini', 'shrimp', 'garlic', 'cherry tomatoes', 'olive oil'],
      author: 'Chef Michael',
      description: 'Low-carb alternative to pasta.',
      tags: ['low-carb', 'seafood', 'keto', 'quick']
    },
    {
      id: 'baked-chicken-veggies',
      title: 'Sheet Pan Chicken & Vegetables',
      image: '/images/sheet-pan-chicken.jpg',
      rating: 4.8,
      reviews: 2789,
      cookTime: '40 mins',
      difficulty: 'easy',
      ingredients: ['chicken breast', 'broccoli', 'bell peppers', 'olive oil', 'herbs'],
      author: 'Chef Lisa',
      description: 'Easy and healthy one-pan dinner.',
      tags: ['high-protein', 'meal-prep', 'low-carb', 'gluten-free']
    },
    {
      id: 'tofu-stir-fry',
      title: 'Crispy Tofu Vegetable Stir-Fry',
      image: '/images/tofu-stir-fry.jpg',
      rating: 4.6,
      reviews: 1654,
      cookTime: '30 mins',
      difficulty: 'medium',
      ingredients: ['firm tofu', 'broccoli', 'carrots', 'snap peas', 'ginger sauce'],
      author: 'Chef Wei',
      description: 'Protein-rich vegetarian stir-fry.',
      tags: ['vegetarian', 'high-protein', 'asian', 'tofu']
    },
    {
      id: 'mediterranean-chickpea',
      title: 'Mediterranean Chickpea Salad',
      image: '/images/chickpea-salad.jpg',
      rating: 4.7,
      reviews: 1987,
      cookTime: '15 mins',
      difficulty: 'easy',
      ingredients: ['chickpeas', 'cucumber', 'tomatoes', 'red onion', 'olive oil'],
      author: 'Chef Elena',
      description: 'Fresh and protein-packed Mediterranean salad.',
      tags: ['vegetarian', 'mediterranean', 'no-cook', 'quick']
    },
    {
      id: 'overnight-oats',
      title: 'Protein Overnight Oats',
      image: '/images/overnight-oats.jpg',
      rating: 4.8,
      reviews: 2234,
      cookTime: '5 mins',
      difficulty: 'easy',
      ingredients: ['oats', 'protein powder', 'almond milk', 'chia seeds', 'berries'],
      author: 'Chef Emma',
      description: 'Healthy make-ahead breakfast.',
      tags: ['breakfast', 'meal-prep', 'high-protein', 'no-cook']
    },
    {
      id: 'stuffed-peppers',
      title: 'Quinoa Stuffed Bell Peppers',
      image: '/images/stuffed-peppers.jpg',
      rating: 4.7,
      reviews: 1876,
      cookTime: '45 mins',
      difficulty: 'medium',
      ingredients: ['bell peppers', 'quinoa', 'black beans', 'corn', 'mexican spices'],
      author: 'Chef Carlos',
      description: 'Colorful and protein-rich stuffed peppers.',
      tags: ['vegetarian', 'gluten-free', 'mexican', 'meal-prep']
    },
    {
      id: 'protein-smoothie',
      title: 'Green Protein Smoothie',
      image: '/images/green-smoothie.jpg',
      rating: 4.9,
      reviews: 3421,
      cookTime: '5 mins',
      difficulty: 'easy',
      ingredients: ['spinach', 'banana', 'protein powder', 'almond milk', 'chia seeds'],
      author: 'Chef Sarah',
      description: 'Nutrient-packed breakfast smoothie.',
      tags: ['breakfast', 'smoothie', 'quick', 'no-cook']
    },
    {
      id: 'baked-cod',
      title: 'Herb-Crusted Baked Cod',
      image: '/images/baked-cod.jpg',
      rating: 4.8,
      reviews: 2156,
      cookTime: '25 mins',
      difficulty: 'easy',
      ingredients: ['cod fillets', 'herbs', 'lemon', 'olive oil', 'garlic'],
      author: 'Chef Michael',
      description: 'Light and flaky baked fish.',
      tags: ['seafood', 'low-carb', 'keto', 'high-protein']
    },
    {
      id: 'tempeh-bowl',
      title: 'Teriyaki Tempeh Bowl',
      image: '/images/tempeh-bowl.jpg',
      rating: 4.6,
      reviews: 1543,
      cookTime: '30 mins',
      difficulty: 'medium',
      ingredients: ['tempeh', 'brown rice', 'broccoli', 'carrots', 'teriyaki sauce'],
      author: 'Chef Lee',
      description: 'Plant-based protein bowl.',
      tags: ['vegan', 'high-protein', 'asian', 'meal-prep']
    }
  ];

  const featuredCollections = [
    {
      id: 'low-carb',
      title: 'Low-Carb Favorites',
      image: '/images/collections/low-carb.jpg',
      path: '/collections/low-carb'
    },
    {
      id: 'vegetarian',
      title: 'Vegetarian Mains',
      image: '/images/collections/vegetarian.jpg',
      path: '/collections/vegetarian'
    },
    {
      id: 'high-protein',
      title: 'High-Protein Meals',
      image: '/images/collections/high-protein.jpg',
      path: '/collections/high-protein'
    },
    {
      id: 'meal-prep',
      title: 'Healthy Meal Prep',
      image: '/images/collections/meal-prep.jpg',
      path: '/collections/meal-prep'
    },
    {
      id: 'breakfast',
      title: 'Healthy Breakfasts',
      image: '/images/collections/healthy-breakfast.jpg',
      path: '/collections/healthy-breakfast'
    },
    {
      id: 'smoothies',
      title: 'Protein Smoothies',
      image: '/images/collections/smoothies.jpg',
      path: '/collections/smoothies'
    },
    {
      id: 'salads',
      title: 'Fresh Salads',
      image: '/images/collections/salads.jpg',
      path: '/collections/salads'
    },
    {
      id: 'plant-based',
      title: 'Plant-Based Meals',
      image: '/images/collections/plant-based.jpg',
      path: '/collections/plant-based'
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
          <h1>Healthy Recipes</h1>
          <p className="header-description">
            Nourish your body with our collection of healthy recipes. From low-carb and keto to 
            vegetarian and high-protein options, find nutritious meals that don't compromise on flavor.
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
        <h2>Explore Healthy Recipes</h2>
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

export default HealthyRecipes; 