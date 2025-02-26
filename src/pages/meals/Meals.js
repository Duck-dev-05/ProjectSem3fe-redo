import React from 'react';
import { Link } from 'react-router-dom';
import './Meals.css';

const AlphabeticalIndex = ({ onLetterClick, activeLetter }) => {
  const alphabet = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  return (
    <div className="alphabet-index">
      {alphabet.map(letter => (
        <button
          key={letter}
          className={`letter-button ${activeLetter === letter ? 'active' : ''}`}
          onClick={() => onLetterClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

const Meals = () => {
  const [activeLetter, setActiveLetter] = React.useState('A');

  const recipeCategories = {
    'A': [
      { id: 'air-fryer', title: 'Air Fryer Recipes', path: '/category/meals/air-fryer' },
      { id: 'appetizers', title: 'Appetizers and Snacks', path: '/category/meals/appetizers' },
      { id: 'asian', title: 'Asian Recipes', path: '/category/meals/asian' },
      { id: 'australian', title: 'Australian Recipes', path: '/category/meals/australian' }
    ],
    'B': [
      { id: 'breakfast', title: 'Breakfast & Brunch', path: '/category/meals/breakfast-brunch' },
      { id: 'bread', title: 'Bread Recipes', path: '/category/meals/bread' },
      { id: 'bbq', title: 'BBQ & Grilling', path: '/category/meals/bbq-grilling' },
      { id: 'beef', title: 'Beef Recipes', path: '/category/meals/beef' },
      { id: 'british', title: 'British Recipes', path: '/category/meals/british' }
    ],
    'C': [
      { id: 'casseroles', title: 'Casserole Recipes', path: '/category/meals/casseroles' },
      { id: 'chicken', title: 'Chicken Recipes', path: '/category/meals/chicken' },
      { id: 'cookies', title: 'Cookie Recipes', path: '/category/meals/cookies' },
      { id: 'chinese', title: 'Chinese Recipes', path: '/category/meals/chinese' },
      { id: 'caribbean', title: 'Caribbean Recipes', path: '/category/meals/caribbean' }
    ],
    'D': [
      { id: 'desserts', title: 'Dessert Recipes', path: '/category/meals/desserts' },
      { id: 'dinner', title: 'Dinner Recipes', path: '/category/meals/dinner' },
      { id: 'drinks', title: 'Drink Recipes', path: '/category/meals/drinks' },
      { id: 'dutch', title: 'Dutch Recipes', path: '/category/meals/dutch' }
    ],
    'E': [
      { id: 'easy', title: 'Easy Recipes', path: '/category/meals/easy' },
      { id: 'eggs', title: 'Egg Recipes', path: '/category/meals/eggs' },
      { id: 'ethiopian', title: 'Ethiopian Recipes', path: '/category/meals/ethiopian' }
    ],
    'F': [
      { id: 'french', title: 'French Recipes', path: '/category/meals/french' },
      { id: 'fish', title: 'Fish Recipes', path: '/category/meals/fish' },
      { id: 'filipino', title: 'Filipino Recipes', path: '/category/meals/filipino' },
      { id: 'fusion', title: 'Fusion Recipes', path: '/category/meals/fusion' }
    ],
    'G': [
      { id: 'german', title: 'German Recipes', path: '/category/meals/german' },
      { id: 'greek', title: 'Greek Recipes', path: '/category/meals/greek' },
      { id: 'gluten-free', title: 'Gluten-Free Recipes', path: '/category/meals/gluten-free' }
    ],
    'H': [
      { id: 'healthy', title: 'Healthy Recipes', path: '/category/meals/healthy' },
      { id: 'holiday', title: 'Holiday Recipes', path: '/category/meals/holiday' },
      { id: 'hungarian', title: 'Hungarian Recipes', path: '/category/meals/hungarian' }
    ],
    'I': [
      { id: 'indian', title: 'Indian Recipes', path: '/category/meals/indian' },
      { id: 'italian', title: 'Italian Recipes', path: '/category/meals/italian' },
      { id: 'instant-pot', title: 'Instant Pot Recipes', path: '/category/meals/instant-pot' }
    ],
    'J': [
      { id: 'japanese', title: 'Japanese Recipes', path: '/category/meals/japanese' },
      { id: 'jamaican', title: 'Jamaican Recipes', path: '/category/meals/jamaican' },
      { id: 'juice', title: 'Juice & Smoothie Recipes', path: '/category/meals/juice' }
    ],
    'K': [
      { id: 'korean', title: 'Korean Recipes', path: '/category/meals/korean' },
      { id: 'keto', title: 'Keto Recipes', path: '/category/meals/keto' },
      { id: 'kids', title: 'Kid-Friendly Recipes', path: '/category/meals/kids' }
    ],
    'L': [
      { id: 'latin', title: 'Latin American Recipes', path: '/category/meals/latin' },
      { id: 'lebanese', title: 'Lebanese Recipes', path: '/category/meals/lebanese' },
      { id: 'low-carb', title: 'Low-Carb Recipes', path: '/category/meals/low-carb' },
      { id: 'lunch', title: 'Lunch Recipes', path: '/category/meals/lunch' }
    ],
    'M': [
      { id: 'mexican', title: 'Mexican Recipes', path: '/category/meals/mexican' },
      { id: 'mediterranean', title: 'Mediterranean Recipes', path: '/category/meals/mediterranean' },
      { id: 'moroccan', title: 'Moroccan Recipes', path: '/category/meals/moroccan' },
      { id: 'muffins', title: 'Muffin Recipes', path: '/category/meals/muffins' }
    ],
    'N': [
      { id: 'noodles', title: 'Noodle Recipes', path: '/category/meals/noodles' },
      { id: 'nigerian', title: 'Nigerian Recipes', path: '/category/meals/nigerian' },
      { id: 'no-bake', title: 'No-Bake Recipes', path: '/category/meals/no-bake' }
    ],
    'O': [
      { id: 'one-pot', title: 'One-Pot Recipes', path: '/category/meals/one-pot' },
      { id: 'overnight', title: 'Overnight Recipes', path: '/category/meals/overnight' },
      { id: 'organic', title: 'Organic Recipes', path: '/category/meals/organic' }
    ],
    'P': [
      { id: 'pasta', title: 'Pasta Recipes', path: '/category/meals/pasta' },
      { id: 'pizza', title: 'Pizza Recipes', path: '/category/meals/pizza' },
      { id: 'pork', title: 'Pork Recipes', path: '/category/meals/pork' },
      { id: 'portuguese', title: 'Portuguese Recipes', path: '/category/meals/portuguese' }
    ],
    'Q': [
      { id: 'quick-easy', title: 'Quick & Easy Recipes', path: '/category/meals/quick-easy' },
      { id: 'quinoa', title: 'Quinoa Recipes', path: '/category/meals/quinoa' },
      { id: 'quiche', title: 'Quiche Recipes', path: '/category/meals/quiche' }
    ],
    'R': [
      { id: 'russian', title: 'Russian Recipes', path: '/category/meals/russian' },
      { id: 'rice', title: 'Rice Recipes', path: '/category/meals/rice' },
      { id: 'roasts', title: 'Roast Recipes', path: '/category/meals/roasts' }
    ],
    'S': [
      { id: 'seafood', title: 'Seafood Recipes', path: '/category/meals/seafood' },
      { id: 'spanish', title: 'Spanish Recipes', path: '/category/meals/spanish' },
      { id: 'slow-cooker', title: 'Slow Cooker Recipes', path: '/category/meals/slow-cooker' },
      { id: 'soups', title: 'Soup Recipes', path: '/category/meals/soups' },
      { id: 'swedish', title: 'Swedish Recipes', path: '/category/meals/swedish' }
    ],
    'T': [
      { id: 'thai', title: 'Thai Recipes', path: '/category/meals/thai' },
      { id: 'turkish', title: 'Turkish Recipes', path: '/category/meals/turkish' },
      { id: 'tex-mex', title: 'Tex-Mex Recipes', path: '/category/meals/tex-mex' }
    ],
    'U': [
      { id: 'ukrainian', title: 'Ukrainian Recipes', path: '/category/meals/ukrainian' },
      { id: 'under-30-minutes', title: 'Under 30 Minutes', path: '/category/meals/under-30-minutes' }
    ],
    'V': [
      { id: 'vegetarian', title: 'Vegetarian Recipes', path: '/category/meals/vegetarian' },
      { id: 'vietnamese', title: 'Vietnamese Recipes', path: '/category/meals/vietnamese' },
      { id: 'vegan', title: 'Vegan Recipes', path: '/category/meals/vegan' }
    ],
    'W': [
      { id: 'whole30', title: 'Whole30 Recipes', path: '/category/meals/whole30' },
      { id: 'whole-grain', title: 'Whole Grain Recipes', path: '/category/meals/whole-grain' },
      { id: 'wraps', title: 'Wrap Recipes', path: '/category/meals/wraps' }
    ],
    'X': [
      { id: 'xmas', title: 'Christmas Recipes', path: '/category/meals/christmas' }
    ],
    'Y': [
      { id: 'yogurt', title: 'Yogurt Recipes', path: '/category/meals/yogurt' },
      { id: 'yeast-bread', title: 'Yeast Bread Recipes', path: '/category/meals/yeast-bread' }
    ],
    'Z': [
      { id: 'zucchini', title: 'Zucchini Recipes', path: '/category/meals/zucchini' },
      { id: 'zero-waste', title: 'Zero-Waste Recipes', path: '/category/meals/zero-waste' }
    ]
  };

  return (
    <div className="recipes-az-container">
      <div className="recipes-header">
        <h1>Recipes A-Z</h1>
        <p className="header-description">
          Browse our entire collection of recipes, or search by category, meal type, 
          or ingredient. Find exactly what you're looking for with our comprehensive recipe index.
        </p>
      </div>

      <AlphabeticalIndex 
        onLetterClick={setActiveLetter} 
        activeLetter={activeLetter}
      />

      <div className="category-section">
        <h2 className="letter-heading">{activeLetter}</h2>
        <div className="category-list">
          {recipeCategories[activeLetter]?.map(category => (
            <Link 
              key={category.id}
              to={category.path}
              className="category-link"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="popular-categories">
        <h2>Popular Categories</h2>
        <div className="popular-grid">
          <Link to="/category/meals/dinner" className="popular-card">
            <img src="/images/categories/dinner.jpg" alt="Dinner" />
            <h3>Dinner Recipes</h3>
          </Link>
          <Link to="/category/meals/quick-easy" className="popular-card">
            <img src="/images/categories/quick-easy.jpg" alt="Quick & Easy" />
            <h3>Quick & Easy</h3>
          </Link>
          <Link to="/category/meals/healthy" className="popular-card">
            <img src="/images/categories/healthy.jpg" alt="Healthy" />
            <h3>Healthy Recipes</h3>
          </Link>
          <Link to="/category/meals/seasonal" className="popular-card">
            <img src="/images/categories/seasonal.jpg" alt="Seasonal" />
            <h3>Seasonal Recipes</h3>
          </Link>
        </div>
      </div>

      <div className="view-all-link">
        <Link to="/meals/all">View All</Link>
      </div>
    </div>
  );
};

export default Meals; 