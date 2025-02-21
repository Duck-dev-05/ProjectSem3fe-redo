import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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

const TopicRecipes = () => {
  const { topicId } = useParams();
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const topicData = {
    'air-fryer': {
      title: 'Air Fryer Recipes',
      description: 'Quick and crispy recipes made in your air fryer',
      recipes: [
        // Easy Recipes
        {
          id: 'air-fryer-wings',
          title: 'Crispy Air Fryer Wings',
          image: '/images/air-fryer-wings.jpg',
          rating: 4.9,
          reviews: 2345,
          cookTime: '25 mins',
          difficulty: 'easy',
          author: 'Chef Mike',
          tags: ['chicken', 'appetizer', 'quick']
        },
        {
          id: 'air-fryer-fries',
          title: 'Perfect Air Fryer French Fries',
          image: '/images/air-fryer-fries.jpg',
          rating: 4.8,
          reviews: 1987,
          cookTime: '20 mins',
          difficulty: 'easy',
          author: 'Chef Sarah',
          tags: ['vegetarian', 'sides', 'potato']
        },
        // Medium Difficulty Recipes
        {
          id: 'air-fryer-fish',
          title: 'Air Fryer Fish & Chips',
          image: '/images/air-fryer-fish.jpg',
          rating: 4.7,
          reviews: 1567,
          cookTime: '35 mins',
          difficulty: 'medium',
          author: 'Chef John',
          tags: ['seafood', 'dinner', 'british']
        },
        {
          id: 'air-fryer-schnitzel',
          title: 'Air Fryer Chicken Schnitzel',
          image: '/images/air-fryer-schnitzel.jpg',
          rating: 4.8,
          reviews: 1234,
          cookTime: '40 mins',
          difficulty: 'medium',
          author: 'Chef Maria',
          tags: ['chicken', 'german', 'dinner']
        },
        // Hard Difficulty Recipes
        {
          id: 'air-fryer-beef-wellington',
          title: 'Mini Air Fryer Beef Wellingtons',
          image: '/images/air-fryer-wellington.jpg',
          rating: 4.9,
          reviews: 876,
          cookTime: '1 hr',
          difficulty: 'hard',
          author: 'Chef Gordon',
          tags: ['beef', 'gourmet', 'special-occasion']
        }
      ]
    },
    'appetizers': {
      title: 'Appetizer Recipes',
      description: 'Start your meal right with these delicious appetizers',
      recipes: [
        // Easy Recipes
        {
          id: 'bruschetta',
          title: 'Classic Bruschetta',
          image: '/images/bruschetta.jpg',
          rating: 4.8,
          reviews: 2156,
          cookTime: '15 mins',
          difficulty: 'easy',
          author: 'Chef Maria',
          tags: ['italian', 'vegetarian', 'quick']
        },
        // Add more appetizer recipes...
      ]
    },
    'asian': {
      title: 'Asian Recipes',
      description: 'Explore the flavors of Asia with these authentic recipes',
      recipes: [
        // Easy Recipes
        {
          id: 'fried-rice',
          title: 'Easy Vegetable Fried Rice',
          image: '/images/fried-rice.jpg',
          rating: 4.7,
          reviews: 3421,
          cookTime: '20 mins',
          difficulty: 'easy',
          author: 'Chef Lee',
          tags: ['chinese', 'vegetarian', 'quick']
        },
        // Medium Difficulty
        {
          id: 'pad-thai',
          title: 'Authentic Pad Thai',
          image: '/images/pad-thai.jpg',
          rating: 4.9,
          reviews: 2876,
          cookTime: '45 mins',
          difficulty: 'medium',
          author: 'Chef Suda',
          tags: ['thai', 'noodles', 'dinner']
        },
        // Hard Difficulty
        {
          id: 'ramen',
          title: 'Traditional Ramen from Scratch',
          image: '/images/ramen.jpg',
          rating: 4.9,
          reviews: 1543,
          cookTime: '3 hrs',
          difficulty: 'hard',
          author: 'Chef Kenji',
          tags: ['japanese', 'soup', 'weekend-project']
        }
      ]
    },
    'breakfast': {
      title: 'Breakfast Recipes',
      description: 'Start your day with these delicious breakfast recipes',
      recipes: [
        // Easy Recipes
        {
          id: 'overnight-oats',
          title: 'Overnight Oats with Berries',
          image: '/images/overnight-oats.jpg',
          rating: 4.8,
          reviews: 1987,
          cookTime: '5 mins',
          difficulty: 'easy',
          author: 'Chef Emma',
          tags: ['healthy', 'meal-prep', 'quick']
        },
        // Medium Difficulty
        {
          id: 'eggs-benedict',
          title: 'Classic Eggs Benedict',
          image: '/images/eggs-benedict.jpg',
          rating: 4.7,
          reviews: 2345,
          cookTime: '35 mins',
          difficulty: 'medium',
          author: 'Chef Michael',
          tags: ['eggs', 'brunch', 'classic']
        }
      ]
    },
    'bbq': {
      title: 'BBQ & Grilling Recipes',
      description: 'Master the art of grilling with these delicious BBQ recipes',
      recipes: [
        {
          id: 'grilled-chicken',
          title: 'Perfect Grilled Chicken',
          image: '/images/grilled-chicken.jpg',
          rating: 4.9,
          reviews: 3456,
          cookTime: '45 mins',
          difficulty: 'medium',
          author: 'Chef Bobby',
          tags: ['chicken', 'summer', 'main-course']
        },
        {
          id: 'smoked-brisket',
          title: 'Texas-Style Smoked Brisket',
          image: '/images/smoked-brisket.jpg',
          rating: 4.9,
          reviews: 2789,
          cookTime: '12 hrs',
          difficulty: 'hard',
          author: 'Chef Aaron',
          tags: ['beef', 'smoking', 'weekend-project']
        }
      ]
    },
    'chinese': {
      title: 'Chinese Recipes',
      description: 'Authentic Chinese recipes from different regions',
      recipes: [
        {
          id: 'kung-pao',
          title: 'Kung Pao Chicken',
          image: '/images/kung-pao.jpg',
          rating: 4.8,
          reviews: 2345,
          cookTime: '30 mins',
          difficulty: 'medium',
          author: 'Chef Wang',
          tags: ['chicken', 'spicy', 'sichuan']
        }
      ]
    },
    'desserts': {
      title: 'Dessert Recipes',
      description: 'Sweet treats and desserts for any occasion',
      recipes: [
        {
          id: 'chocolate-cake',
          title: 'Classic Chocolate Cake',
          image: '/images/chocolate-cake.jpg',
          rating: 4.9,
          reviews: 5678,
          cookTime: '1 hr',
          difficulty: 'medium',
          author: 'Chef Lisa',
          tags: ['baking', 'chocolate', 'cake']
        }
      ]
    },
    'easy': {
      title: 'Easy Recipes',
      description: 'Quick and simple recipes for busy days',
      recipes: [
        {
          id: 'pasta-marinara',
          title: '15-Minute Pasta Marinara',
          image: '/images/pasta-marinara.jpg',
          rating: 4.7,
          reviews: 1987,
          cookTime: '15 mins',
          difficulty: 'easy',
          author: 'Chef Marco',
          tags: ['pasta', 'quick', 'vegetarian']
        }
      ]
    },
    'french': {
      title: 'French Recipes',
      description: 'Classic French cuisine and modern interpretations',
      recipes: [
        {
          id: 'coq-au-vin',
          title: 'Traditional Coq au Vin',
          image: '/images/coq-au-vin.jpg',
          rating: 4.8,
          reviews: 1567,
          cookTime: '2 hrs',
          difficulty: 'hard',
          author: 'Chef Pierre',
          tags: ['chicken', 'wine', 'classic']
        }
      ]
    },
    'gluten-free': {
      title: 'Gluten-Free Recipes',
      description: 'Delicious recipes without gluten',
      recipes: [
        {
          id: 'quinoa-bowl',
          title: 'Mediterranean Quinoa Bowl',
          image: '/images/quinoa-bowl.jpg',
          rating: 4.7,
          reviews: 2134,
          cookTime: '25 mins',
          difficulty: 'easy',
          author: 'Chef Sarah',
          tags: ['healthy', 'vegetarian', 'quick']
        }
      ]
    },
    'healthy': {
      title: 'Healthy Recipes',
      description: 'Nutritious and delicious meals for a healthy lifestyle',
      recipes: [
        {
          id: 'salmon-kale',
          title: 'Grilled Salmon with Kale',
          image: '/images/salmon-kale.jpg',
          rating: 4.8,
          reviews: 2456,
          cookTime: '30 mins',
          difficulty: 'medium',
          author: 'Chef Emma',
          tags: ['seafood', 'low-carb', 'high-protein']
        }
      ]
    },
    'italian': {
      title: 'Italian Recipes',
      description: 'Classic Italian dishes and modern favorites',
      recipes: [
        {
          id: 'homemade-pizza',
          title: 'Authentic Neapolitan Pizza',
          image: '/images/neapolitan-pizza.jpg',
          rating: 4.9,
          reviews: 3678,
          cookTime: '2 hrs',
          difficulty: 'hard',
          author: 'Chef Giuseppe',
          tags: ['pizza', 'baking', 'weekend-project']
        }
      ]
    },
    'japanese': {
      title: 'Japanese Recipes',
      description: 'Traditional and modern Japanese dishes',
      recipes: [
        {
          id: 'sushi-rolls',
          title: 'Homemade Sushi Rolls',
          image: '/images/sushi-rolls.jpg',
          rating: 4.8,
          reviews: 2345,
          cookTime: '1 hr',
          difficulty: 'medium',
          author: 'Chef Tanaka',
          tags: ['seafood', 'rice', 'japanese']
        }
      ]
    },
    'korean': {
      title: 'Korean Recipes',
      description: 'Authentic Korean dishes and fusion recipes',
      recipes: [
        {
          id: 'kimchi-jjigae',
          title: 'Kimchi Stew',
          image: '/images/kimchi-jjigae.jpg',
          rating: 4.9,
          reviews: 1876,
          cookTime: '45 mins',
          difficulty: 'medium',
          author: 'Chef Kim',
          tags: ['soup', 'spicy', 'korean']
        }
      ]
    },
    'latin': {
      title: 'Latin American Recipes',
      description: 'Vibrant flavors from Latin America',
      recipes: [
        {
          id: 'empanadas',
          title: 'Beef Empanadas',
          image: '/images/empanadas.jpg',
          rating: 4.7,
          reviews: 2134,
          cookTime: '1 hr',
          difficulty: 'medium',
          author: 'Chef Carlos',
          tags: ['beef', 'appetizer', 'latin']
        }
      ]
    },
    'mediterranean': {
      title: 'Mediterranean Recipes',
      description: 'Healthy and flavorful Mediterranean cuisine',
      recipes: [
        {
          id: 'greek-salad',
          title: 'Classic Greek Salad',
          image: '/images/greek-salad.jpg',
          rating: 4.8,
          reviews: 1987,
          cookTime: '15 mins',
          difficulty: 'easy',
          author: 'Chef Elena',
          tags: ['salad', 'healthy', 'vegetarian']
        }
      ]
    },
    'noodles': {
      title: 'Noodle Recipes',
      description: 'Delicious noodle dishes from around the world',
      recipes: [
        {
          id: 'lo-mein',
          title: 'Vegetable Lo Mein',
          image: '/images/lo-mein.jpg',
          rating: 4.7,
          reviews: 2345,
          cookTime: '30 mins',
          difficulty: 'easy',
          author: 'Chef Liu',
          tags: ['chinese', 'vegetarian', 'quick']
        }
      ]
    },
    'one-pot': {
      title: 'One-Pot Recipes',
      description: 'Easy cleanup with these one-pot wonders',
      recipes: [
        {
          id: 'one-pot-pasta',
          title: 'One-Pot Creamy Pasta',
          image: '/images/one-pot-pasta.jpg',
          rating: 4.8,
          reviews: 3456,
          cookTime: '30 mins',
          difficulty: 'easy',
          author: 'Chef Laura',
          tags: ['pasta', 'quick', 'family']
        }
      ]
    },
    'pasta': {
      title: 'Pasta Recipes',
      description: 'From classic Italian to modern fusion pasta dishes',
      recipes: [
        {
          id: 'carbonara',
          title: 'Classic Carbonara',
          image: '/images/carbonara.jpg',
          rating: 4.9,
          reviews: 4567,
          cookTime: '25 mins',
          difficulty: 'medium',
          author: 'Chef Marco',
          tags: ['italian', 'pasta', 'classic']
        }
      ]
    },
    'quick-easy': {
      title: 'Quick & Easy Recipes',
      description: 'Fast and simple recipes for busy days',
      recipes: [
        {
          id: 'quesadillas',
          title: '10-Minute Quesadillas',
          image: '/images/quesadillas.jpg',
          rating: 4.7,
          reviews: 1876,
          cookTime: '10 mins',
          difficulty: 'easy',
          author: 'Chef Maria',
          tags: ['mexican', 'quick', 'cheese']
        }
      ]
    },
    'rice': {
      title: 'Rice Recipes',
      description: 'Delicious rice dishes from around the world',
      recipes: [
        {
          id: 'risotto',
          title: 'Mushroom Risotto',
          image: '/images/risotto.jpg',
          rating: 4.8,
          reviews: 2345,
          cookTime: '45 mins',
          difficulty: 'medium',
          author: 'Chef Antonio',
          tags: ['italian', 'vegetarian', 'rice']
        }
      ]
    },
    'seafood': {
      title: 'Seafood Recipes',
      description: 'Fresh and flavorful seafood dishes',
      recipes: [
        {
          id: 'shrimp-scampi',
          title: 'Garlic Shrimp Scampi',
          image: '/images/shrimp-scampi.jpg',
          rating: 4.9,
          reviews: 3456,
          cookTime: '20 mins',
          difficulty: 'easy',
          author: 'Chef Michael',
          tags: ['seafood', 'pasta', 'quick']
        }
      ]
    }
  };

  const currentTopic = topicData[topicId];

  if (!currentTopic) {
    return (
      <div className="no-results allrecipes-style">
        <div className="no-results-content">
          <h3>Topic Not Found</h3>
          <p>The recipe category you're looking for doesn't exist.</p>
          <Link to="/meals" className="back-link">
            Back to Recipe Categories
          </Link>
        </div>
      </div>
    );
  }

  // Filter and sort logic
  const allTags = [...new Set(currentTopic.recipes.flatMap(recipe => recipe.tags))];
  
  const filteredRecipes = currentTopic.recipes.filter(recipe => {
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
          <h1>{currentTopic.title}</h1>
          <p className="header-description">{currentTopic.description}</p>
        </div>
      </div>

      <div className="recipe-filters">
        <h2>Explore {currentTopic.title}</h2>
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

export default TopicRecipes; 