import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ViewAll.css';

const ViewAll = () => {
  const { category } = useParams();
  const [activeSort, setActiveSort] = useState('latest');
  const [activeFilters, setActiveFilters] = useState({});
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const sortOptions = [
    { id: 'latest', label: 'Latest' },
    { id: 'popular', label: 'Most Popular' },
    { id: 'likes', label: 'Most Likes' },
    { id: 'rated', label: 'Highest Rated' },
    { id: 'trending', label: 'Trending' }
  ];

  const categoryData = {
    dinners: {
      title: 'All Dinner Recipes',
      description: 'Discover our complete collection of dinner recipes, from quick weeknight meals to special occasions.',
      stats: {
        total: 1245,
        latest: 28,
        trending: 15
      },
      items: [
        {
          id: '5-ingredient',
          title: '5-Ingredient Dinners',
          image: '/images/5-ingredient-dinners.jpg',
          count: '245 recipes',
          description: 'Simple and delicious meals with just 5 ingredients.'
        },
        {
          id: 'one-pot',
          title: 'One-Pot Meals',
          image: '/images/one-pot-meals.jpg',
          count: '189 recipes',
          description: 'Easy cleanup with these one-pot dinner solutions.'
        },
        {
          id: 'quick-easy',
          title: 'Quick & Easy',
          image: '/images/quick-easy.jpg',
          count: '312 recipes',
          description: 'Delicious dinners ready in a flash.'
        },
        {
          id: '30-minute',
          title: '30-Minute Meals',
          image: '/images/30-minute-meals.jpg',
          count: '278 recipes',
          description: 'Complete meals ready in 30 minutes or less.'
        },
        {
          id: 'family',
          title: 'Family Dinners',
          image: '/images/family-dinners.jpg',
          count: '256 recipes',
          description: 'Kid-friendly meals the whole family will love.'
        },
        {
          id: 'soups-stews',
          title: 'Soups, Stews & Chili',
          image: '/images/soups-stews.jpg',
          count: '198 recipes',
          description: 'Warm, comforting soups and hearty stews.'
        },
        {
          id: 'comfort-food',
          title: 'Comfort Food',
          image: '/images/comfort-food.jpg',
          count: '167 recipes',
          description: 'Classic comfort food recipes.'
        },
        {
          id: 'main-dishes',
          title: 'Main Dishes',
          image: '/images/main-dishes.jpg',
          count: '423 recipes',
          description: 'Main course recipes for any occasion.'
        },
        {
          id: 'sheet-pan',
          title: 'Sheet Pan Dinners',
          image: '/images/sheet-pan-dinners.jpg',
          count: '145 recipes',
          description: 'Easy, one-pan meals with minimal cleanup.'
        }
      ]
    },
    meals: {
      title: 'All Meal Types',
      description: 'Browse our complete collection of recipes by meal type, from breakfast to dessert.',
      items: [
        {
          id: 1,
          title: 'Breakfast & Brunch',
          image: '/images/breakfast.jpg',
          count: '342 recipes',
          description: 'Start your day with these delicious breakfast recipes.'
        },
        // Add more meal categories...
      ]
    },
    ingredients: {
      title: 'Browse by Main Ingredient',
      description: 'Find recipes based on your favorite ingredients.',
      stats: {
        total: 2345,
        latest: 45,
        trending: 23
      },
      items: [
        {
          id: 1,
          title: 'Chicken',
          image: '/images/chicken.jpg',
          count: '523 recipes',
          description: 'Delicious chicken recipes for every occasion.'
        },
        {
          id: 2,
          title: 'Beef',
          image: '/images/beef.jpg',
          count: '342 recipes',
          description: 'From steaks to stews, find the perfect beef recipe.'
        },
        {
          id: 3,
          title: 'Seafood',
          image: '/images/seafood.jpg',
          count: '287 recipes',
          description: 'Fresh and flavorful seafood dishes.'
        }
      ]
    },
    cuisines: {
      title: 'World Cuisines',
      description: 'Explore recipes from around the world.',
      stats: {
        total: 1876,
        latest: 32,
        trending: 18
      },
      items: [
        {
          id: 1,
          title: 'Italian',
          image: '/images/italian.jpg',
          count: '425 recipes',
          description: 'Classic pasta, pizza, and more Italian favorites.'
        },
        {
          id: 2,
          title: 'Mexican',
          image: '/images/mexican.jpg',
          count: '368 recipes',
          description: 'Spicy, flavorful Mexican dishes.'
        },
        {
          id: 3,
          title: 'Asian',
          image: '/images/asian.jpg',
          count: '412 recipes',
          description: 'From Chinese to Thai, explore Asian cuisines.'
        }
      ]
    },
    occasions: {
      title: 'Special Occasions',
      description: 'Perfect recipes for holidays and celebrations.',
      stats: {
        total: 945,
        latest: 15,
        trending: 12
      },
      items: [
        {
          id: 1,
          title: 'Holiday Season',
          image: '/images/holiday.jpg',
          count: '245 recipes',
          description: 'Festive recipes for the holiday season.'
        },
        {
          id: 2,
          title: 'Birthday Parties',
          image: '/images/birthday.jpg',
          count: '156 recipes',
          description: 'Cakes, snacks, and party favorites.'
        }
      ]
    }
  };

  const currentCategory = categoryData[category] || {
    title: 'Category Not Found',
    description: 'Please try another category',
    stats: { total: 0, latest: 0, trending: 0 },
    items: []
  };

  // Add filter categories
  const filterCategories = {
    mealType: {
      title: 'Meal Type',
      options: [
        { id: 'breakfast', label: 'Breakfast' },
        { id: 'lunch', label: 'Lunch' },
        { id: 'dinner', label: 'Dinner' },
        { id: 'snacks', label: 'Snacks & Appetizers' }
      ]
    },
    dietary: {
      title: 'Dietary Needs',
      options: [
        { id: 'vegetarian', label: 'Vegetarian' },
        { id: 'vegan', label: 'Vegan' },
        { id: 'glutenFree', label: 'Gluten-Free' },
        { id: 'dairyFree', label: 'Dairy-Free' },
        { id: 'keto', label: 'Keto' },
        { id: 'lowCarb', label: 'Low-Carb' }
      ]
    },
    difficulty: {
      title: 'Difficulty',
      options: [
        { id: 'easy', label: 'Easy' },
        { id: 'medium', label: 'Intermediate' },
        { id: 'hard', label: 'Advanced' }
      ]
    },
    time: {
      title: 'Cooking Time',
      options: [
        { id: '15min', label: '15 Minutes or Less' },
        { id: '30min', label: '30 Minutes or Less' },
        { id: '60min', label: '1 Hour or Less' },
        { id: 'slow', label: 'Slow Cooker' }
      ]
    },
    occasion: {
      title: 'Occasion',
      options: [
        { id: 'weeknight', label: 'Weeknight' },
        { id: 'weekend', label: 'Weekend' },
        { id: 'special', label: 'Special Occasion' },
        { id: 'holiday', label: 'Holiday' }
      ]
    },
    cookingMethod: {
      title: 'Cooking Method',
      options: [
        { id: 'baking', label: 'Baking' },
        { id: 'grilling', label: 'Grilling' },
        { id: 'airFryer', label: 'Air Fryer' },
        { id: 'slowCooker', label: 'Slow Cooker' },
        { id: 'instantPot', label: 'Instant Pot' },
        { id: 'noOven', label: 'No Oven Required' }
      ]
    },
    skillLevel: {
      title: 'Skill Level',
      options: [
        { id: 'beginner', label: 'Beginner Friendly' },
        { id: 'intermediate', label: 'Intermediate' },
        { id: 'advanced', label: 'Advanced' }
      ]
    },
    cost: {
      title: 'Cost',
      options: [
        { id: 'budget', label: 'Budget Friendly' },
        { id: 'moderate', label: 'Moderate' },
        { id: 'premium', label: 'Premium' }
      ]
    },
    seasonal: {
      title: 'Seasonal',
      options: [
        { id: 'spring', label: 'Spring' },
        { id: 'summer', label: 'Summer' },
        { id: 'fall', label: 'Fall' },
        { id: 'winter', label: 'Winter' }
      ]
    }
  };

  // Add more recipe data
  const recipeData = {
    trending: [
      {
        id: 1,
        title: "Air Fryer Korean Chicken Wings",
        image: "/images/korean-wings.jpg",
        rating: 4.8,
        reviews: 256,
        cookTime: "35 mins",
        difficulty: "easy",
        cuisine: "Asian",
        method: "airFryer",
        dietary: ["glutenFree"],
        author: "Chef Sarah Kim"
      },
      {
        id: 2,
        title: "One-Pan Mediterranean Pasta",
        image: "/images/med-pasta.jpg",
        rating: 4.7,
        reviews: 189,
        cookTime: "25 mins",
        difficulty: "easy",
        cuisine: "Mediterranean",
        method: "onePot",
        dietary: ["vegetarian"],
        author: "Marco Rossi"
      },
      {
        id: 3,
        title: "Homemade Sourdough Bread",
        image: "/images/sourdough-bread.jpg",
        rating: 4.9,
        reviews: 312,
        cookTime: "3 hrs",
        difficulty: "medium",
        cuisine: "Baking",
        method: "baking",
        dietary: ["vegetarian"],
        author: "Emma Baker"
      },
      {
        id: 4,
        title: "Thai Green Curry",
        image: "/images/thai-green-curry.jpg",
        rating: 4.7,
        reviews: 178,
        cookTime: "45 mins",
        difficulty: "medium",
        cuisine: "Thai",
        method: "stovetop",
        dietary: ["gluten-free"],
        author: "Chef Tom Kha"
      },
      {
        id: 5,
        title: "Quinoa Buddha Bowl",
        image: "/images/quinoa-bowl.jpg",
        rating: 4.8,
        reviews: 203,
        cookTime: "30 mins",
        difficulty: "easy",
        cuisine: "Healthy",
        method: "meal-prep",
        dietary: ["vegan", "gluten-free"],
        author: "Sarah Wellness"
      }
    ],
    popular: [
      {
        id: 3,
        title: "Instant Pot Butter Chicken",
        image: "/images/butter-chicken.jpg",
        rating: 4.9,
        reviews: 423,
        cookTime: "45 mins",
        difficulty: "medium",
        cuisine: "Indian",
        method: "instantPot",
        dietary: ["glutenFree"],
        author: "Priya Sharma"
      },
      {
        id: 4,
        title: "Classic Margherita Pizza",
        image: "/images/margherita-pizza.jpg",
        rating: 4.8,
        reviews: 567,
        cookTime: "40 mins",
        difficulty: "medium",
        cuisine: "Italian",
        method: "baking",
        dietary: ["vegetarian"],
        author: "Mario Rossi"
      },
      {
        id: 5,
        title: "Spicy Chicken Tacos",
        image: "/images/chicken-tacos.jpg",
        rating: 4.7,
        reviews: 389,
        cookTime: "35 mins",
        difficulty: "easy",
        cuisine: "Mexican",
        method: "stovetop",
        dietary: ["dairy-free"],
        author: "Maria Garcia"
      },
      {
        id: 6,
        title: "Vegan Chocolate Cake",
        image: "/images/vegan-chocolate-cake.jpg",
        rating: 4.9,
        reviews: 445,
        cookTime: "1 hr",
        difficulty: "medium",
        cuisine: "Dessert",
        method: "baking",
        dietary: ["vegan"],
        author: "Chef Plant-Based"
      }
    ],
    latest: [
      {
        id: 7,
        title: "Keto Cauliflower Mac & Cheese",
        image: "/images/cauli-mac.jpg",
        rating: 4.6,
        reviews: 167,
        cookTime: "40 mins",
        difficulty: "easy",
        cuisine: "American",
        method: "baking",
        dietary: ["keto", "low-carb"],
        author: "Keto Kitchen"
      },
      {
        id: 8,
        title: "Mediterranean Grilled Salmon",
        image: "/images/med-salmon.jpg",
        rating: 4.9,
        reviews: 234,
        cookTime: "25 mins",
        difficulty: "easy",
        cuisine: "Mediterranean",
        method: "grilling",
        dietary: ["gluten-free", "paleo"],
        author: "Chef Mediterranean"
      },
      {
        id: 9,
        title: "Mushroom Risotto",
        image: "/images/mushroom-risotto.jpg",
        rating: 4.8,
        reviews: 198,
        cookTime: "45 mins",
        difficulty: "medium",
        cuisine: "Italian",
        method: "stovetop",
        dietary: ["vegetarian"],
        author: "Chef Giorgio"
      }
    ],
    rated: [
      {
        id: 10,
        title: "Perfect Eggs Benedict",
        image: "/images/eggs-benedict.jpg",
        rating: 5.0,
        reviews: 678,
        cookTime: "30 mins",
        difficulty: "advanced",
        cuisine: "Breakfast",
        method: "stovetop",
        dietary: [],
        author: "Brunch Master"
      },
      {
        id: 11,
        title: "Japanese Ramen",
        image: "/images/ramen.jpg",
        rating: 4.9,
        reviews: 892,
        cookTime: "2 hrs",
        difficulty: "advanced",
        cuisine: "Japanese",
        method: "stovetop",
        dietary: [],
        author: "Chef Ramen"
      },
      {
        id: 12,
        title: "French Macarons",
        image: "/images/macarons.jpg",
        rating: 4.9,
        reviews: 567,
        cookTime: "2 hrs",
        difficulty: "advanced",
        cuisine: "French",
        method: "baking",
        dietary: ["gluten-free"],
        author: "Pastry Chef Marie"
      }
    ]
  };

  // Add more filter categories
  const additionalFilters = {
    cuisine: {
      title: 'Cuisine Type',
      options: [
        { id: 'italian', label: 'Italian', count: 245 },
        { id: 'mexican', label: 'Mexican', count: 189 },
        { id: 'indian', label: 'Indian', count: 167 },
        { id: 'chinese', label: 'Chinese', count: 203 },
        { id: 'thai', label: 'Thai', count: 145 },
        { id: 'mediterranean', label: 'Mediterranean', count: 178 }
      ]
    },
    equipment: {
      title: 'Kitchen Equipment',
      options: [
        { id: 'airFryer', label: 'Air Fryer', count: 134 },
        { id: 'instantPot', label: 'Instant Pot', count: 156 },
        { id: 'slowCooker', label: 'Slow Cooker', count: 167 },
        { id: 'grill', label: 'Grill', count: 145 },
        { id: 'dutchOven', label: 'Dutch Oven', count: 89 }
      ]
    },
    mainIngredient: {
      title: 'Main Ingredient',
      options: [
        { id: 'chicken', label: 'Chicken', count: 312 },
        { id: 'beef', label: 'Beef', count: 245 },
        { id: 'pork', label: 'Pork', count: 178 },
        { id: 'seafood', label: 'Seafood', count: 203 },
        { id: 'tofu', label: 'Tofu', count: 89 },
        { id: 'eggs', label: 'Eggs', count: 134 }
      ]
    },
    specialDiet: {
      title: 'Special Diet',
      options: [
        { id: 'lowCarb', label: 'Low Carb', count: 178 },
        { id: 'keto', label: 'Keto', count: 156 },
        { id: 'paleo', label: 'Paleo', count: 123 },
        { id: 'whole30', label: 'Whole30', count: 89 },
        { id: 'diabetic', label: 'Diabetic Friendly', count: 145 }
      ]
    }
  };

  // Add latest recipes data
  const latestRecipes = {
    featured: {
      id: 'featured-1',
      title: "Honey Garlic Salmon",
      image: "/images/honey-garlic-salmon.jpg",
      rating: 4.9,
      reviews: 128,
      prepTime: "10 mins",
      cookTime: "20 mins",
      difficulty: "easy",
      cuisine: "Asian Fusion",
      author: "Chef Mike Chen",
      date: "2024-03-20",
      description: "A perfect blend of sweet and savory flavors that comes together in just 30 minutes.",
      tags: ["Seafood", "Quick & Easy", "Healthy", "Gluten-Free"]
    },
    recent: [
      {
        id: 'latest-1',
        title: "Mediterranean Quinoa Bowl",
        image: "/images/med-quinoa-bowl.jpg",
        rating: 4.7,
        reviews: 86,
        totalTime: "25 mins",
        author: "Lisa Green",
        date: "2024-03-19",
        tags: ["Vegetarian", "Healthy", "Meal Prep"]
      },
      {
        id: 'latest-2',
        title: "Crispy Air Fryer Tofu",
        image: "/images/crispy-tofu.jpg",
        rating: 4.8,
        reviews: 94,
        totalTime: "35 mins",
        author: "Sarah Wong",
        date: "2024-03-19",
        tags: ["Vegan", "Air Fryer", "Healthy"]
      },
      {
        id: 'latest-3',
        title: "One-Pot Creamy Mushroom Pasta",
        image: "/images/mushroom-pasta.jpg",
        rating: 4.6,
        reviews: 112,
        totalTime: "30 mins",
        author: "Marco Rossi",
        date: "2024-03-18",
        tags: ["Vegetarian", "One-Pot", "Pasta"]
      }
    ]
  };

  // Add this new data section for latest tagged recipes
  const latestTaggedRecipes = {
    'Quick & Easy': [
      {
        id: 'quick-1',
        title: "15-Minute Shrimp Stir Fry",
        image: "/images/shrimp-stirfry.jpg",
        rating: 4.8,
        reviews: 156,
        cookTime: "15 mins",
        author: "Chef Mike Chen",
        date: "2024-03-21",
        tags: ["Quick & Easy", "Seafood", "Asian"]
      },
      {
        id: 'quick-2',
        title: "5-Ingredient Pasta Alfredo",
        image: "/images/pasta-alfredo.jpg",
        rating: 4.6,
        reviews: 98,
        cookTime: "20 mins",
        author: "Lisa Green",
        date: "2024-03-20",
        tags: ["Quick & Easy", "Pasta", "Italian"]
      }
    ],
    'Healthy': [
      {
        id: 'healthy-1',
        title: "Rainbow Buddha Bowl",
        image: "/images/buddha-bowl.jpg",
        rating: 4.9,
        reviews: 203,
        cookTime: "25 mins",
        author: "Sarah Wong",
        date: "2024-03-21",
        tags: ["Healthy", "Vegetarian", "Bowl"]
      },
      {
        id: 'healthy-2',
        title: "Grilled Chicken Salad",
        image: "/images/chicken-salad.jpg",
        rating: 4.7,
        reviews: 167,
        cookTime: "30 mins",
        author: "John Smith",
        date: "2024-03-20",
        tags: ["Healthy", "Chicken", "Salad"]
      }
    ],
    'Trending': [
      {
        id: 'trend-1',
        title: "TikTok Baked Feta Pasta",
        image: "/images/feta-pasta.jpg",
        rating: 4.8,
        reviews: 312,
        cookTime: "35 mins",
        author: "Emma Davis",
        date: "2024-03-21",
        tags: ["Trending", "Pasta", "Vegetarian"]
      },
      {
        id: 'trend-2',
        title: "Viral Green Goddess Salad",
        image: "/images/green-goddess.jpg",
        rating: 4.9,
        reviews: 289,
        cookTime: "15 mins",
        author: "Alex Kim",
        date: "2024-03-20",
        tags: ["Trending", "Healthy", "Salad"]
      }
    ]
  };

  // Add this new component for dinner recipes grid
  const DinnerRecipesGrid = () => {
    if (!recipeData[activeSort]) {
      return <div className="loading">Loading recipes...</div>;
    }

    if (recipeData[activeSort].length === 0) {
      return <div className="no-results">No recipes found</div>;
    }

    return (
      <div className="dinner-recipes-section">
        <div className="section-header">
          <h2>Dinner Recipes</h2>
          <div className="recipe-filters">
            <select className="filter-select">
              <option value="all">All Types</option>
              <option value="quick">Quick & Easy</option>
              <option value="healthy">Healthy</option>
              <option value="vegetarian">Vegetarian</option>
            </select>
            <select className="filter-select">
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
              <option value="rated">Highest Rated</option>
            </select>
          </div>
        </div>
        
        <div className="recipes-grid">
          {recipeData[activeSort]?.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image">
                <img src={recipe.image} alt={recipe.title} />
                <div className="recipe-difficulty">{recipe.difficulty}</div>
              </div>
              <div className="recipe-content">
                <h3>{recipe.title}</h3>
                <div className="recipe-meta">
                  <span className="rating">⭐ {recipe.rating}</span>
                  <span className="reviews">({recipe.reviews})</span>
                  <span className="cook-time">⏰ {recipe.cookTime}</span>
                </div>
                <div className="recipe-tags">
                  {recipe.dietary?.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                  <span className="tag">{recipe.cuisine}</span>
                  <span className="tag">{recipe.method}</span>
                </div>
                <div className="recipe-author">
                  By {recipe.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleSortChange = (sortId) => {
    setActiveSort(sortId);
    console.log('Sorting by:', sortId);
  };

  const handleFilterChange = (categoryId, filterId) => {
    setActiveFilters(prev => {
      const newFilters = {
        ...prev,
        [categoryId]: {
          ...prev[categoryId],
          [filterId]: !prev[categoryId]?.[filterId]
        }
      };
      
      // Apply filters to recipes
      const filtered = filterRecipes(recipeData[activeSort] || [], newFilters);
      setFilteredRecipes(filtered);
      
      return newFilters;
    });
  };

  const filterRecipes = (recipes, filters) => {
    if (Object.keys(filters).length === 0) return recipes;

    return recipes.filter(recipe => {
      // Check each active filter category
      return Object.entries(filters).every(([category, filterValues]) => {
        // If no filters are active in this category, pass the check
        if (!Object.values(filterValues).some(Boolean)) return true;

        switch (category) {
          case 'mealType':
            return Object.entries(filterValues).some(([id, isActive]) => 
              isActive && recipe.mealType === id
            );
          
          case 'dietary':
            return Object.entries(filterValues).some(([id, isActive]) => 
              isActive && recipe.dietary?.includes(id)
            );
          
          case 'difficulty':
            return Object.entries(filterValues).some(([id, isActive]) => 
              isActive && recipe.difficulty === id
            );
          
          case 'time':
            return Object.entries(filterValues).some(([id, isActive]) => {
              if (!isActive) return false;
              const cookTimeMinutes = parseInt(recipe.cookTime);
              switch (id) {
                case '15min': return cookTimeMinutes <= 15;
                case '30min': return cookTimeMinutes <= 30;
                case '60min': return cookTimeMinutes <= 60;
                case 'slow': return recipe.method === 'slowCooker';
                default: return false;
              }
            });

          case 'cookingMethod':
            return Object.entries(filterValues).some(([id, isActive]) => 
              isActive && recipe.method === id
            );

          default:
            return true;
        }
      });
    });
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).reduce((count, category) => {
      return count + Object.values(category).filter(Boolean).length;
    }, 0);
  };

  const clearFilters = () => {
    setActiveFilters({});
    setFilteredRecipes([]);
  };

  // Add active filters display
  const getActiveFilterLabels = () => {
    const labels = [];
    Object.entries(activeFilters).forEach(([categoryId, filters]) => {
      Object.entries(filters).forEach(([filterId, isActive]) => {
        if (isActive) {
          const option = filterCategories[categoryId].options.find(opt => opt.id === filterId);
          if (option) {
            labels.push({
              category: categoryId,
              id: filterId,
              label: option.label
            });
          }
        }
      });
    });
    return labels;
  };

  // Add recipe card component
  const RecipeCard = ({ recipe }) => (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
        <div className="recipe-badges">
          {recipe.dietary?.map(diet => (
            <span key={diet} className="badge">{diet}</span>
          ))}
        </div>
      </div>
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <div className="recipe-meta">
          <div className="rating">
            <span className="stars">{'★'.repeat(Math.floor(recipe.rating))}</span>
            <span className="rating-number">{recipe.rating}</span>
            <span className="reviews">({recipe.reviews})</span>
          </div>
          <div className="cook-time">
            <span className="icon">⏰</span>
            {recipe.cookTime}
          </div>
        </div>
        <div className="recipe-tags">
          <span className="tag">{recipe.cuisine}</span>
          <span className="tag">{recipe.difficulty}</span>
          <span className="tag">{recipe.method}</span>
        </div>
        <div className="recipe-author">
          By {recipe.author}
        </div>
      </div>
    </Link>
  );

  // Add Latest Recipes Section component
  const LatestRecipesSection = () => (
    <div className="latest-recipes-section">
      <h2>Latest Recipes</h2>
      <div className="latest-recipes-grid">
        <div className="featured-recipe">
          <Link to={`/recipe/${latestRecipes.featured.id}`} className="featured-card">
            <div className="featured-image">
              <img src={latestRecipes.featured.image} alt={latestRecipes.featured.title} />
              <div className="featured-overlay">
                <span className="featured-badge">Featured Recipe</span>
              </div>
            </div>
            <div className="featured-content">
              <h3>{latestRecipes.featured.title}</h3>
              <p className="featured-description">{latestRecipes.featured.description}</p>
              <div className="featured-meta">
                <div className="meta-item">
                  <span className="icon">⭐</span>
                  <span>{latestRecipes.featured.rating} ({latestRecipes.featured.reviews})</span>
                </div>
                <div className="meta-item">
                  <span className="icon">⏰</span>
                  <span>{latestRecipes.featured.prepTime} + {latestRecipes.featured.cookTime}</span>
                </div>
                <div className="meta-item">
                  <span className="icon">👨‍🍳</span>
                  <span>{latestRecipes.featured.difficulty}</span>
                </div>
              </div>
              <div className="featured-tags">
                {latestRecipes.featured.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="featured-author">
                By {latestRecipes.featured.author} • {latestRecipes.featured.date}
              </div>
            </div>
          </Link>
        </div>
        <div className="recent-recipes">
          {latestRecipes.recent.map(recipe => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recent-recipe-card">
              <div className="recent-image">
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <div className="recent-content">
                <h4>{recipe.title}</h4>
                <div className="recent-meta">
                  <span className="rating">⭐ {recipe.rating}</span>
                  <span className="time">⏰ {recipe.totalTime}</span>
                </div>
                <div className="recent-tags">
                  {recipe.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="recent-author">
                  By {recipe.author} • {recipe.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  // Add this new component
  const TaggedRecipesSection = () => (
    <div className="tagged-recipes-section">
      {Object.entries(latestTaggedRecipes).map(([tag, recipes]) => (
        <div key={tag} className="tag-section">
          <div className="tag-header">
            <h3>{tag} Recipes</h3>
            <Link to={`/tag/${tag.toLowerCase().replace(/ /g, '-')}`} className="view-all-link">
              View All <span className="arrow">→</span>
            </Link>
          </div>
          <div className="tagged-recipes-grid">
            {recipes.map(recipe => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="tagged-recipe-card">
                <div className="tagged-image">
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="tag-badge">{tag}</div>
                </div>
                <div className="tagged-content">
                  <h4>{recipe.title}</h4>
                  <div className="tagged-meta">
                    <div className="rating-time">
                      <span className="rating">⭐ {recipe.rating}</span>
                      <span className="time">⏰ {recipe.cookTime}</span>
                    </div>
                    <div className="tagged-tags">
                      {recipe.tags.filter(t => t !== tag).slice(0, 2).map(t => (
                        <span key={t} className="mini-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="tagged-author">
                    By {recipe.author} • {recipe.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // Update the sidebar filters section
  const FilterSidebar = () => (
    <div className="filter-sidebar">
      <h2>Filter Results</h2>
      {Object.entries(filterCategories).map(([categoryId, category]) => (
        <div key={categoryId} className="filter-category">
          <h3>{category.title}</h3>
          <div className="filter-options">
            {category.options.map(option => (
              <FilterCheckbox
                key={option.id}
                categoryId={categoryId}
                option={option}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // Update the recipe grid to use filtered results
  const RecipeGrid = () => {
    const recipesToShow = filteredRecipes.length > 0 
      ? filteredRecipes 
      : recipeData[activeSort] || [];

    return (
      <div className="recipe-grid">
        {recipesToShow.length > 0 ? (
          recipesToShow.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className="no-results">
            <h3>No recipes found</h3>
            <p>Try adjusting your filters to see more recipes</p>
          </div>
        )}
      </div>
    );
  };

  // Update the filter checkboxes to be controlled components
  const FilterCheckbox = ({ categoryId, option }) => (
    <label className="filter-option">
      <input
        type="checkbox"
        checked={!!activeFilters[categoryId]?.[option.id]}
        onChange={() => handleFilterChange(categoryId, option.id)}
      />
      <span className="filter-label">{option.label}</span>
      <span className="filter-count">({option.count || countRecipesForFilter(categoryId, option.id)})</span>
    </label>
  );

  // Helper function to count recipes for each filter
  const countRecipesForFilter = (categoryId, filterId) => {
    return recipeData[activeSort]?.filter(recipe => {
      switch (categoryId) {
        case 'dietary':
          return recipe.dietary?.includes(filterId);
        case 'difficulty':
          return recipe.difficulty === filterId;
        case 'cookingMethod':
          return recipe.method === filterId;
        default:
          return false;
      }
    }).length || 0;
  };

  return (
    <div className="view-all-container">
      {/* Keep sort tabs at top */}
      <div className="sort-tabs-container">
        <div className="sort-tabs">
          {sortOptions.map(option => (
            <button
              key={option.id}
              className={`sort-tab ${activeSort === option.id ? 'active' : ''}`}
              onClick={() => handleSortChange(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content with sidebar filters */}
      <div className="content-with-filters">
        <FilterSidebar />
        
        <div className="main-content">
          {getActiveFilterLabels().length > 0 && (
            <div className="active-filters">
              {getActiveFilterLabels().map(filter => (
                <span 
                  key={`${filter.category}-${filter.id}`} 
                  className="filter-tag"
                  onClick={() => handleFilterChange(filter.category, filter.id)}
                >
                  {filter.label}
                  <button className="remove-filter">×</button>
                </span>
              ))}
              {getActiveFilterLabels().length > 0 && (
                <button className="clear-all-filters" onClick={clearFilters}>
                  Clear All
                </button>
              )}
            </div>
          )}
          
          <RecipeGrid />
        </div>
      </div>

      {category === 'dinners' ? (
        <DinnerRecipesGrid />
      ) : (
        <div className="category-content">
          <div className="category-header">
            <h1>{currentCategory.title}</h1>
            <p>{currentCategory.description}</p>
            {currentCategory.stats && (
              <div className="category-stats">
                <span>{currentCategory.stats.total} Total Recipes</span>
                <span>{currentCategory.stats.latest} New</span>
                <span>{currentCategory.stats.trending} Trending</span>
              </div>
            )}
          </div>
          
          <div className="category-items-grid">
            {currentCategory.items.map(item => (
              <Link key={item.id} to={`/category/${category}/${item.id}`} className="category-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="item-count">{item.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAll; 