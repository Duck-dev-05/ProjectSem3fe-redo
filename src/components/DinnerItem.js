import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DinnerItem.css';

const DinnerItem = () => {
  const { itemId } = useParams();

  // Updated dinner items data with all categories
  const dinnerItems = {
    '5-ingredient': {
      id: '5-ingredient',
      title: '5-Ingredient Dinners',
      description: 'Simple and delicious meals with just 5 ingredients or less.',
      image: '/images/5-ingredient-dinners.jpg',
      recipes: [
        {
          id: 'simple-pasta',
          title: '5-Ingredient Creamy Pasta',
          image: '/images/creamy-pasta.jpg',
          rating: 4.8,
          reviews: 245,
          cookTime: '20 mins',
          difficulty: 'easy',
          ingredients: ['pasta', 'cream', 'parmesan', 'garlic', 'butter'],
          author: 'Chef Maria'
        },
        {
          id: 'chicken-rice',
          title: 'One-Pan Chicken & Rice',
          image: '/images/chicken-rice.jpg',
          rating: 4.7,
          reviews: 189,
          cookTime: '30 mins',
          difficulty: 'easy',
          ingredients: ['chicken', 'rice', 'broth', 'onion', 'seasoning'],
          author: 'John Cook'
        },
        {
          id: 'salmon-glaze',
          title: 'Glazed Salmon',
          image: '/images/glazed-salmon.jpg',
          rating: 4.9,
          reviews: 167,
          cookTime: '15 mins',
          difficulty: 'easy',
          ingredients: ['salmon', 'soy sauce', 'honey', 'garlic', 'ginger'],
          author: 'Chef Sarah'
        }
      ]
    },
    'one-pot': {
      id: 'one-pot',
      title: 'One-Pot Meals',
      description: 'Easy cleanup with these one-pot dinner solutions.',
      image: '/images/one-pot-meals.jpg',
      recipes: [
        {
          id: 'chili',
          title: 'One-Pot Chili',
          image: '/images/chili.jpg',
          rating: 4.8,
          reviews: 312,
          cookTime: '45 mins',
          difficulty: 'medium',
          ingredients: ['ground beef', 'beans', 'tomatoes', 'onion', 'spices'],
          author: 'Chef Mike'
        },
        {
          id: 'curry',
          title: 'Coconut Curry',
          image: '/images/coconut-curry.jpg',
          rating: 4.9,
          reviews: 278,
          cookTime: '35 mins',
          difficulty: 'medium',
          ingredients: ['chicken', 'coconut milk', 'curry paste', 'vegetables'],
          author: 'Chef Thai'
        }
      ]
    },
    'quick-easy': {
      id: 'quick-easy',
      title: 'Quick & Easy',
      description: 'Delicious dinners ready in a flash, perfect for busy weeknights.',
      image: '/images/quick-easy.jpg',
      recipes: [
        {
          id: 'quick-stir-fry',
          title: '15-Minute Chicken Stir Fry',
          image: '/images/chicken-stir-fry.jpg',
          rating: 4.7,
          reviews: 234,
          cookTime: '15 mins',
          difficulty: 'easy',
          ingredients: ['chicken breast', 'mixed vegetables', 'soy sauce', 'garlic', 'ginger'],
          author: 'Chef Lisa'
        },
        {
          id: 'quick-pasta',
          title: 'Quick Garlic Shrimp Pasta',
          image: '/images/shrimp-pasta.jpg',
          rating: 4.8,
          reviews: 189,
          cookTime: '20 mins',
          difficulty: 'easy',
          ingredients: ['shrimp', 'pasta', 'garlic', 'olive oil', 'parsley'],
          author: 'Chef Marco'
        }
      ]
    },
    '30-minute': {
      id: '30-minute',
      title: '30-Minute Meals',
      description: 'Complete, satisfying meals ready in 30 minutes or less.',
      image: '/images/30-minute-meals.jpg',
      recipes: [
        {
          id: 'sheet-pan-salmon',
          title: 'Sheet Pan Salmon & Vegetables',
          image: '/images/sheet-pan-salmon.jpg',
          rating: 4.9,
          reviews: 276,
          cookTime: '25 mins',
          difficulty: 'easy',
          ingredients: ['salmon fillets', 'broccoli', 'carrots', 'olive oil', 'seasonings'],
          author: 'Chef Sarah'
        }
      ]
    },
    'family': {
      id: 'family',
      title: 'Family Dinners',
      description: 'Kid-friendly meals that the whole family will love.',
      image: '/images/family-dinners.jpg',
      recipes: [
        {
          id: 'mac-cheese',
          title: 'Homemade Mac & Cheese',
          image: '/images/mac-cheese.jpg',
          rating: 4.8,
          reviews: 423,
          cookTime: '40 mins',
          difficulty: 'medium',
          ingredients: ['macaroni', 'cheddar', 'milk', 'butter', 'breadcrumbs'],
          author: 'Chef Emily'
        }
      ]
    },
    'soups-stews': {
      id: 'soups-stews',
      title: 'Soups, Stews & Chili',
      description: 'Warm, comforting soups and hearty stews for any occasion.',
      image: '/images/soups-stews.jpg',
      recipes: [
        {
          id: 'tomato-soup',
          title: 'Creamy Tomato Soup',
          image: '/images/tomato-soup.jpg',
          rating: 4.7,
          reviews: 312,
          cookTime: '35 mins',
          difficulty: 'easy',
          ingredients: ['tomatoes', 'cream', 'onion', 'garlic', 'herbs'],
          author: 'Chef Thomas'
        }
      ]
    },
    'comfort-food': {
      id: 'comfort-food',
      title: 'Comfort Food',
      description: 'Classic comfort food recipes that feel like a warm hug.',
      image: '/images/comfort-food.jpg',
      recipes: [
        {
          id: 'meatloaf',
          title: 'Classic Meatloaf',
          image: '/images/meatloaf.jpg',
          rating: 4.8,
          reviews: 389,
          cookTime: '1 hr',
          difficulty: 'medium',
          ingredients: ['ground beef', 'onion', 'breadcrumbs', 'eggs', 'ketchup'],
          author: 'Chef Robert'
        }
      ]
    },
    'main-dishes': {
      id: 'main-dishes',
      title: 'Main Dishes',
      description: 'Our collection of main course recipes for any occasion.',
      image: '/images/main-dishes.jpg',
      recipes: [
        {
          id: 'roast-chicken',
          title: 'Perfect Roast Chicken',
          image: '/images/roast-chicken.jpg',
          rating: 4.9,
          reviews: 456,
          cookTime: '1 hr 30 mins',
          difficulty: 'medium',
          ingredients: ['whole chicken', 'herbs', 'lemon', 'garlic', 'butter'],
          author: 'Chef Julia'
        }
      ]
    },
    'sheet-pan': {
      id: 'sheet-pan',
      title: 'Sheet Pan Dinners',
      description: 'Easy, one-pan meals with minimal cleanup required.',
      image: '/images/sheet-pan-dinners.jpg',
      recipes: [
        {
          id: 'sheet-pan-chicken',
          title: 'Sheet Pan Chicken & Vegetables',
          image: '/images/sheet-pan-chicken.jpg',
          rating: 4.7,
          reviews: 234,
          cookTime: '45 mins',
          difficulty: 'easy',
          ingredients: ['chicken thighs', 'potatoes', 'carrots', 'olive oil', 'herbs'],
          author: 'Chef Michael'
        }
      ]
    }
  };

  const currentItem = dinnerItems[itemId];

  if (!currentItem) {
    return (
      <div className="dinner-item-not-found">
        <h2>Item Not Found</h2>
        <p>The dinner category you're looking for doesn't exist.</p>
        <Link to="/dinners" className="back-link">Back to Dinner Categories</Link>
      </div>
    );
  }

  return (
    <div className="dinner-item-container">
      <div className="dinner-item-header">
        <div className="header-content">
          <h1>{currentItem.title}</h1>
          <p>{currentItem.description}</p>
          <div className="recipe-count">
            {currentItem.recipes.length} Recipes
          </div>
        </div>
        <div className="header-image">
          <img src={currentItem.image} alt={currentItem.title} />
        </div>
      </div>

      <div className="dinner-recipes-grid">
        {currentItem.recipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
              <div className="recipe-difficulty">{recipe.difficulty}</div>
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
              <div className="ingredients-preview">
                <h4>Ingredients:</h4>
                <p>{recipe.ingredients.join(', ')}</p>
              </div>
              <div className="recipe-author">
                By {recipe.author}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DinnerItem; 