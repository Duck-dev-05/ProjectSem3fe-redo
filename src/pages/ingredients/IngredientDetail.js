import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './IngredientDetail.css';

const RecipeCard = ({ recipe }) => (
  <Link to={`/recipe/${recipe.id}`} className="recipe-card">
    <div className="recipe-image-wrapper">
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-rating">
        <span className="stars">{'★'.repeat(Math.floor(recipe.rating))}</span>
        <span className="rating-count">({recipe.reviews})</span>
      </div>
    </div>
    <div className="recipe-content">
      <h3>{recipe.title}</h3>
      <div className="recipe-meta">
        <span className="cook-time"><i className="far fa-clock"></i> {recipe.cookTime}</span>
        <span className="difficulty">{recipe.difficulty}</span>
      </div>
      <p className="recipe-description">{recipe.description}</p>
    </div>
  </Link>
);

const IngredientDetail = () => {
  const { ingredientId } = useParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const ingredientData = {
    'almond-meal': {
      title: 'Almond Meal',
      description: 'A gluten-free alternative flour made from ground almonds, perfect for baking and coating.',
      image: '/images/ingredients/almond-meal.jpg',
      categories: ['Baking', 'Gluten-Free', 'Healthy', 'Desserts'],
      recipes: [
        {
          id: 'almond-cake',
          title: 'Flourless Almond Cake',
          image: '/images/recipes/almond-cake.jpg',
          rating: 4.8,
          reviews: 1245,
          cookTime: '1 hr',
          difficulty: 'medium',
          description: 'Rich and moist gluten-free cake made with almond meal.',
          category: 'Desserts'
        }
      ]
    },
    'beets': {
      title: 'Beets',
      description: 'Earthy root vegetable, great for salads and roasting.',
      image: '/images/ingredients/beets.jpg',
      categories: ['Vegetables', 'Healthy', 'Salads'],
      recipes: [
        {
          id: 'roasted-beets',
          title: 'Roasted Beets with Feta',
          image: '/images/recipes/roasted-beets.jpg',
          rating: 4.7,
          reviews: 789,
          cookTime: '45 mins',
          difficulty: 'easy',
          description: 'Sweet roasted beets topped with feta cheese.',
          category: 'Salads'
        }
      ]
    },
    'cabbage': {
      title: 'Cabbage',
      description: 'Versatile vegetable used in salads, soups, and stir-fries.',
      image: '/images/ingredients/cabbage.jpg',
      categories: ['Vegetables', 'Healthy', 'Soups'],
      recipes: [
        {
          id: 'cabbage-soup',
          title: 'Hearty Cabbage Soup',
          image: '/images/recipes/cabbage-soup.jpg',
          rating: 4.5,
          reviews: 456,
          cookTime: '1 hr',
          difficulty: 'easy',
          description: 'Warm and comforting cabbage soup.',
          category: 'Soups'
        }
      ]
    },
    'dates': {
      title: 'Dates',
      description: 'Sweet and chewy fruit, perfect for snacks and desserts.',
      image: '/images/ingredients/dates.jpg',
      categories: ['Snacks', 'Healthy', 'Desserts'],
      recipes: [
        {
          id: 'date-energy-balls',
          title: 'No-Bake Date Energy Balls',
          image: '/images/recipes/date-energy-balls.jpg',
          rating: 4.8,
          reviews: 1234,
          cookTime: '10 mins',
          difficulty: 'easy',
          description: 'Quick and healthy energy balls made with dates and nuts.',
          category: 'Snacks'
        }
      ]
    },
    'eggs': {
      title: 'Eggs',
      description: 'Versatile ingredient used in many dishes, from breakfast to baking.',
      image: '/images/ingredients/eggs.jpg',
      categories: ['Breakfast', 'Baking', 'Healthy'],
      recipes: [
        {
          id: 'scrambled-eggs',
          title: 'Fluffy Scrambled Eggs',
          image: '/images/recipes/scrambled-eggs.jpg',
          rating: 4.9,
          reviews: 5678,
          cookTime: '10 mins',
          difficulty: 'easy',
          description: 'Perfectly fluffy scrambled eggs for breakfast.',
          category: 'Breakfast'
        }
      ]
    },
    'fish': {
      title: 'Fish',
      description: 'Healthy protein source, great for grilling, baking, or frying.',
      image: '/images/ingredients/fish.jpg',
      categories: ['Seafood', 'Healthy', 'Main Dishes'],
      recipes: [
        {
          id: 'grilled-salmon',
          title: 'Grilled Salmon with Lemon',
          image: '/images/recipes/grilled-salmon.jpg',
          rating: 4.8,
          reviews: 2345,
          cookTime: '20 mins',
          difficulty: 'easy',
          description: 'Delicious grilled salmon with a lemon butter sauce.',
          category: 'Main Dishes'
        }
      ]
    },
    'grapes': {
      title: 'Grapes',
      description: 'Sweet and juicy fruit, great for snacking or desserts.',
      image: '/images/ingredients/grapes.jpg',
      categories: ['Fruits', 'Healthy'],
      recipes: [
        {
          id: 'grape-salad',
          title: 'Grape and Walnut Salad',
          image: '/images/recipes/grape-salad.jpg',
          rating: 4.6,
          reviews: 789,
          cookTime: '15 mins',
          difficulty: 'easy',
          description: 'Refreshing salad with grapes and walnuts.',
          category: 'Salads'
        }
      ]
    },
    'honey': {
      title: 'Honey',
      description: 'Natural sweetener made by bees, great for baking and sweetening.',
      image: '/images/ingredients/honey.jpg',
      categories: ['Sweeteners', 'Baking'],
      recipes: [
        {
          id: 'honey-bread',
          title: 'Honey Wheat Bread',
          image: '/images/recipes/honey-bread.jpg',
          rating: 4.7,
          reviews: 456,
          cookTime: '1 hr 30 mins',
          difficulty: 'medium',
          description: 'Deliciously sweet and soft honey wheat bread.',
          category: 'Baking'
        }
      ]
    },
    'iceberg-lettuce': {
      title: 'Iceberg Lettuce',
      description: 'Crisp and refreshing lettuce, perfect for salads and sandwiches.',
      image: '/images/ingredients/iceberg-lettuce.jpg',
      categories: ['Vegetables', 'Salads'],
      recipes: [
        {
          id: 'iceberg-salad',
          title: 'Classic Iceberg Salad',
          image: '/images/recipes/iceberg-salad.jpg',
          rating: 4.5,
          reviews: 234,
          cookTime: '10 mins',
          difficulty: 'easy',
          description: 'Simple and refreshing iceberg salad.',
          category: 'Salads'
        }
      ]
    },
    'jalapenos': {
      title: 'Jalapeños',
      description: 'Spicy peppers used in many dishes for added heat.',
      image: '/images/ingredients/jalapenos.jpg',
      categories: ['Vegetables', 'Spices'],
      recipes: [
        {
          id: 'jalapeno-poppers',
          title: 'Stuffed Jalapeño Poppers',
          image: '/images/recipes/jalapeno-poppers.jpg',
          rating: 4.8,
          reviews: 567,
          cookTime: '30 mins',
          difficulty: 'medium',
          description: 'Spicy jalapeños stuffed with cheese and baked.',
          category: 'Appetizers'
        }
      ]
    },
    'kiwi': {
      title: 'Kiwi',
      description: 'Sweet and tangy fruit, great for snacking and desserts.',
      image: '/images/ingredients/kiwi.jpg',
      categories: ['Fruits', 'Healthy'],
      recipes: [
        {
          id: 'kiwi-smoothie',
          title: 'Kiwi Banana Smoothie',
          image: '/images/recipes/kiwi-smoothie.jpg',
          rating: 4.6,
          reviews: 345,
          cookTime: '5 mins',
          difficulty: 'easy',
          description: 'Refreshing smoothie made with kiwi and banana.',
          category: 'Drinks'
        }
      ]
    },
    'lemons': {
      title: 'Lemons',
      description: 'Citrus fruit used for flavoring and cooking.',
      image: '/images/ingredients/lemons.jpg',
      categories: ['Fruits', 'Flavorings'],
      recipes: [
        {
          id: 'lemonade',
          title: 'Classic Lemonade',
          image: '/images/recipes/lemonade.jpg',
          rating: 4.9,
          reviews: 1234,
          cookTime: '10 mins',
          difficulty: 'easy',
          description: 'Refreshing homemade lemonade.',
          category: 'Drinks'
        }
      ]
    },
    'mango': {
      title: 'Mango',
      description: 'Sweet tropical fruit, great for snacking and desserts.',
      image: '/images/ingredients/mango.jpg',
      categories: ['Fruits', 'Healthy'],
      recipes: [
        {
          id: 'mango-salsa',
          title: 'Mango Salsa',
          image: '/images/recipes/mango-salsa.jpg',
          rating: 4.8,
          reviews: 567,
          cookTime: '15 mins',
          difficulty: 'easy',
          description: 'Fresh and zesty mango salsa.',
          category: 'Condiments'
        }
      ]
    },
    'nectarines': {
      title: 'Nectarines',
      description: 'Juicy stone fruit, great for snacking and desserts.',
      image: '/images/ingredients/nectarines.jpg',
      categories: ['Fruits', 'Healthy'],
      recipes: [
        {
          id: 'nectarine-crisp',
          title: 'Nectarine Crisp',
          image: '/images/recipes/nectarine-crisp.jpg',
          rating: 4.7,
          reviews: 234,
          cookTime: '45 mins',
          difficulty: 'medium',
          description: 'Warm and delicious nectarine crisp.',
          category: 'Desserts'
        }
      ]
    },
    'oranges': {
      title: 'Oranges',
      description: 'Citrus fruit, great for snacking and juicing.',
      image: '/images/ingredients/oranges.jpg',
      categories: ['Fruits', 'Healthy'],
      recipes: [
        {
          id: 'orange-smoothie',
          title: 'Orange Banana Smoothie',
          image: '/images/recipes/orange-smoothie.jpg',
          rating: 4.6,
          reviews: 345,
          cookTime: '5 mins',
          difficulty: 'easy',
          description: 'Refreshing smoothie made with orange and banana.',
          category: 'Drinks'
        }
      ]
    },
    'peppers': {
      title: 'Peppers',
      description: 'Versatile vegetable used in many dishes, from salads to stir-fries.',
      image: '/images/ingredients/peppers.jpg',
      categories: ['Vegetables', 'Healthy'],
      recipes: [
        {
          id: 'stuffed-peppers',
          title: 'Stuffed Bell Peppers',
          image: '/images/recipes/stuffed-peppers.jpg',
          rating: 4.8,
          reviews: 567,
          cookTime: '1 hr',
          difficulty: 'medium',
          description: 'Bell peppers stuffed with rice and ground meat.',
          category: 'Main Dishes'
        }
      ]
    },
    'quinoa': {
      title: 'Quinoa',
      description: 'Protein-rich grain, great for salads and side dishes.',
      image: '/images/ingredients/quinoa.jpg',
      categories: ['Grains', 'Healthy'],
      recipes: [
        {
          id: 'quinoa-salad',
          title: 'Mediterranean Quinoa Salad',
          image: '/images/recipes/quinoa-salad.jpg',
          rating: 4.9,
          reviews: 789,
          cookTime: '20 mins',
          difficulty: 'easy',
          description: 'Healthy salad made with quinoa and fresh vegetables.',
          category: 'Salads'
        }
      ]
    },
    'raspberries': {
      title: 'Raspberries',
      description: 'Sweet and tart berries, great for desserts and snacking.',
      image: '/images/ingredients/raspberries.jpg',
      categories: ['Fruits', 'Healthy'],
      recipes: [
        {
          id: 'raspberry-sorbet',
          title: 'Raspberry Sorbet',
          image: '/images/recipes/raspberry-sorbet.jpg',
          rating: 4.8,
          reviews: 456,
          cookTime: '4 hrs (freezing time)',
          difficulty: 'easy',
          description: 'Refreshing raspberry sorbet.',
          category: 'Desserts'
        }
      ]
    },
    'spinach': {
      title: 'Spinach',
      description: 'Leafy green vegetable, great for salads and cooking.',
      image: '/images/ingredients/spinach.jpg',
      categories: ['Vegetables', 'Healthy'],
      recipes: [
        {
          id: 'spinach-salad',
          title: 'Spinach Salad with Balsamic Dressing',
          image: '/images/recipes/spinach-salad.jpg',
          rating: 4.7,
          reviews: 234,
          cookTime: '10 mins',
          difficulty: 'easy',
          description: 'Fresh spinach salad with a tangy dressing.',
          category: 'Salads'
        }
      ]
    },
    'tomatoes': {
      title: 'Tomatoes',
      description: 'Juicy fruit used in salads, sauces, and cooking.',
      image: '/images/ingredients/tomatoes.jpg',
      categories: ['Vegetables', 'Healthy'],
      recipes: [
        {
          id: 'caprese-salad',
          title: 'Caprese Salad',
          image: '/images/recipes/caprese-salad.jpg',
          rating: 4.9,
          reviews: 567,
          cookTime: '10 mins',
          difficulty: 'easy',
          description: 'Classic Italian salad with fresh tomatoes and mozzarella.',
          category: 'Salads'
        }
      ]
    },
    'ugli-fruit': {
      title: 'Ugli Fruit',
      description: 'Hybrid citrus fruit, sweet and tangy.',
      image: '/images/ingredients/ugli-fruit.jpg',
      categories: ['Fruits', 'Healthy'],
      recipes: [
        {
          id: 'ugli-fruit-salad',
          title: 'Ugli Fruit Salad',
          image: '/images/recipes/ugli-fruit-salad.jpg',
          rating: 4.5,
          reviews: 123,
          cookTime: '10 mins',
          difficulty: 'easy',
          description: 'Refreshing salad with ugli fruit and mint.',
          category: 'Salads'
        }
      ]
    },
    'vanilla': {
      title: 'Vanilla',
      description: 'Flavoring derived from vanilla beans, used in desserts.',
      image: '/images/ingredients/vanilla.jpg',
      categories: ['Baking', 'Flavorings'],
      recipes: [
        {
          id: 'vanilla-cupcakes',
          title: 'Vanilla Cupcakes',
          image: '/images/recipes/vanilla-cupcakes.jpg',
          rating: 4.8,
          reviews: 456,
          cookTime: '20 mins',
          difficulty: 'easy',
          description: 'Light and fluffy vanilla cupcakes.',
          category: 'Desserts'
        }
      ]
    },
    'watermelon': {
      title: 'Watermelon',
      description: 'Refreshing summer fruit, great for snacking and desserts.',
      image: '/images/ingredients/watermelon.jpg',
      categories: ['Fruits', 'Healthy'],
      recipes: [
        {
          id: 'watermelon-salad',
          title: 'Watermelon Feta Salad',
          image: '/images/recipes/watermelon-salad.jpg',
          rating: 4.9,
          reviews: 4567,
          cookTime: '10 mins',
          difficulty: 'easy',
          description: 'Refreshing salad with watermelon and feta cheese.',
          category: 'Salads'
        }
      ]
    },
    'xanthan-gum': {
      title: 'Xanthan Gum',
      description: 'A thickening agent used in gluten-free baking.',
      image: '/images/ingredients/xanthan-gum.jpg',
      categories: ['Baking', 'Gluten-Free'],
      recipes: [
        {
          id: 'gluten-free-bread',
          title: 'Gluten-Free Bread',
          image: '/images/recipes/gluten-free-bread.jpg',
          rating: 4.6,
          reviews: 789,
          cookTime: '1 hr',
          difficulty: 'medium',
          description: 'Delicious gluten-free bread using xanthan gum.',
          category: 'Baking'
        }
      ]
    },
    'yogurt': {
      title: 'Yogurt',
      description: 'Creamy dairy product perfect for breakfast and baking.',
      image: '/images/ingredients/yogurt.jpg',
      categories: ['Breakfast', 'Healthy', 'Snacks', 'Desserts'],
      recipes: [
        {
          id: 'parfait',
          title: 'Berry Yogurt Parfait',
          image: '/images/recipes/parfait.jpg',
          rating: 4.6,
          reviews: 1543,
          cookTime: '10 mins',
          difficulty: 'easy',
          description: 'Layered yogurt parfait with fresh berries and granola.',
          category: 'Breakfast'
        }
      ]
    },
    'zucchini': {
      title: 'Zucchini',
      description: 'Versatile summer squash perfect for many dishes.',
      image: '/images/ingredients/zucchini.jpg',
      categories: ['Vegetables', 'Healthy', 'Side Dishes', 'Baking'],
      recipes: [
        {
          id: 'zucchini-bread',
          title: 'Classic Zucchini Bread',
          image: '/images/recipes/zucchini-bread.jpg',
          rating: 4.8,
          reviews: 2156,
          cookTime: '1 hr',
          difficulty: 'medium',
          description: 'Moist and delicious bread made with fresh zucchini.',
          category: 'Baking'
        }
      ]
    },
    'avocados': {
      title: 'Avocados',
      description: 'Creamy fruit rich in healthy fats, perfect for salads and spreads.',
      image: '/images/ingredients/avocados.jpg',
      categories: ['Fruits', 'Healthy', 'Salads'],
      recipes: [
        {
          id: 'guacamole',
          title: 'Classic Guacamole',
          image: '/images/recipes/guacamole.jpg',
          rating: 4.9,
          reviews: 2345,
          cookTime: '10 mins',
          difficulty: 'easy',
          description: 'Creamy guacamole made with fresh avocados and lime.',
          category: 'Dips'
        },
        {
          id: 'avocado-toast',
          title: 'Avocado Toast',
          image: '/images/recipes/avocado-toast.jpg',
          rating: 4.8,
          reviews: 1234,
          cookTime: '5 mins',
          difficulty: 'easy',
          description: 'Simple and delicious avocado toast topped with salt and pepper.',
          category: 'Breakfast'
        }
      ]
    }
  };

  const ingredient = ingredientData[ingredientId];

  if (!ingredient) {
    return (
      <div className="not-found">
        <h2>Ingredient Not Found</h2>
        <p>The ingredient you're looking for doesn't exist.</p>
        <Link to="/ingredients" className="back-link">Back to Ingredients</Link>
      </div>
    );
  }

  const filteredRecipes = ingredient.recipes.filter(recipe => 
    activeCategory === 'all' || recipe.category === activeCategory
  );

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return 0; // You would typically sort by date here
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="ingredient-detail">
      <div className="ingredient-header">
        <div className="header-content">
          <h1>{ingredient.title} Recipes</h1>
          <p>{ingredient.description}</p>
        </div>
        <div className="header-image">
          <img src={ingredient.image} alt={ingredient.title} />
        </div>
      </div>

      <div className="recipe-filters">
        <div className="category-filters">
          <button 
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Recipes
          </button>
          {ingredient.categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="sort-options">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      <div className="recipes-grid">
        {sortedRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default IngredientDetail; 