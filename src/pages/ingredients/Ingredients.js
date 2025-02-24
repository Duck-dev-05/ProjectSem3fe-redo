import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ingredients.css';

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

const Ingredients = () => {
  const [activeLetter, setActiveLetter] = useState('A');

  const ingredientCategories = {
    'A': [
      { id: 'almond-meal', title: 'Almond Meal', path: '/ingredients/almond-meal' },
      { id: 'almonds', title: 'Almonds', path: '/ingredients/almonds' },
      { id: 'amaranth', title: 'Amaranth', path: '/ingredients/amaranth' },
      { id: 'apples', title: 'Apples', path: '/ingredients/apples' },
      { id: 'apricots', title: 'Apricots', path: '/ingredients/apricots' },
      { id: 'avocados', title: 'Avocados', path: '/ingredients/avocados' },
      { id: 'artichokes', title: 'Artichokes', path: '/ingredients/artichokes' },
      { id: 'asparagus', title: 'Asparagus', path: '/ingredients/asparagus' },
      { id: 'arugula', title: 'Arugula', path: '/ingredients/arugula' }
    ],
    'B': [
      { id: 'bananas', title: 'Bananas', path: '/ingredients/bananas' },
      { id: 'barley', title: 'Barley', path: '/ingredients/barley' },
      { id: 'beef', title: 'Beef', path: '/ingredients/beef' },
      { id: 'beef-chuck', title: 'Beef Chuck', path: '/ingredients/beef-chuck' },
      { id: 'beef-ribs', title: 'Beef Ribs', path: '/ingredients/beef-ribs' },
      { id: 'beef-tenderloin', title: 'Beef Tenderloin', path: '/ingredients/beef-tenderloin' },
      { id: 'brisket', title: 'Brisket', path: '/ingredients/brisket' },
      { id: 'brown-rice', title: 'Brown Rice', path: '/ingredients/brown-rice' },
      { id: 'buckwheat', title: 'Buckwheat', path: '/ingredients/buckwheat' },
      { id: 'bulgur', title: 'Bulgur', path: '/ingredients/bulgur' },
      { id: 'bacon', title: 'Bacon', path: '/ingredients/bacon' },
      { id: 'bagels', title: 'Bagels', path: '/ingredients/bagels' },
      { id: 'bell-peppers', title: 'Bell Peppers', path: '/ingredients/bell-peppers' },
      { id: 'blackberries', title: 'Blackberries', path: '/ingredients/blackberries' },
      { id: 'blueberries', title: 'Blueberries', path: '/ingredients/blueberries' },
      { id: 'broccoli', title: 'Broccoli', path: '/ingredients/broccoli' },
      { id: 'brussels-sprouts', title: 'Brussels Sprouts', path: '/ingredients/brussels-sprouts' },
      { id: 'butter', title: 'Butter', path: '/ingredients/butter' },
      { id: 'beets', title: 'Beets', path: '/ingredients/beets' }
    ],
    'C': [
      { id: 'cheese', title: 'Cheese', path: '/ingredients/cheese' },
      { id: 'cherries', title: 'Cherries', path: '/ingredients/cherries' },
      { id: 'chia-seeds', title: 'Chia Seeds', path: '/ingredients/chia-seeds' },
      { id: 'chicken', title: 'Chicken', path: '/ingredients/chicken' },
      { id: 'chicken-breasts', title: 'Chicken Breasts', path: '/ingredients/chicken-breasts' },
      { id: 'chicken-legs', title: 'Chicken Legs', path: '/ingredients/chicken-legs' },
      { id: 'chicken-thighs', title: 'Chicken Thighs', path: '/ingredients/chicken-thighs' },
      { id: 'chicken-wings', title: 'Chicken Wings', path: '/ingredients/chicken-wings' },
      { id: 'chocolate', title: 'Chocolate', path: '/ingredients/chocolate' },
      { id: 'coconut', title: 'Coconut', path: '/ingredients/coconut' },
      { id: 'corn-flour', title: 'Corn Flour', path: '/ingredients/corn-flour' },
      { id: 'cornish-hens', title: 'Cornish Hens', path: '/ingredients/cornish-hens' },
      { id: 'cornmeal', title: 'Cornmeal', path: '/ingredients/cornmeal' },
      { id: 'cabbage', title: 'Cabbage', path: '/ingredients/cabbage' },
      { id: 'carrots', title: 'Carrots', path: '/ingredients/carrots' },
      { id: 'cauliflower', title: 'Cauliflower', path: '/ingredients/cauliflower' },
      { id: 'celery', title: 'Celery', path: '/ingredients/celery' },
      { id: 'cinnamon', title: 'Cinnamon', path: '/ingredients/cinnamon' },
      { id: 'cream', title: 'Cream', path: '/ingredients/cream' },
      { id: 'cucumber', title: 'Cucumber', path: '/ingredients/cucumber' }
    ],
    'D': [
      { id: 'dates', title: 'Dates', path: '/ingredients/dates' },
      { id: 'duck', title: 'Duck', path: '/ingredients/duck' },
      { id: 'duck-breast', title: 'Duck Breast', path: '/ingredients/duck-breast' },
      { id: 'dill', title: 'Dill', path: '/ingredients/dill' },
      { id: 'dried-beans', title: 'Dried Beans', path: '/ingredients/dried-beans' }
    ],
    'E': [
      { id: 'eggplant', title: 'Eggplant', path: '/ingredients/eggplant' },
      { id: 'eggs', title: 'Eggs', path: '/ingredients/eggs' },
      { id: 'endive', title: 'Endive', path: '/ingredients/endive' },
      { id: 'egg-noodles', title: 'Egg Noodles', path: '/ingredients/egg-noodles' },
      { id: 'english-muffins', title: 'English Muffins', path: '/ingredients/english-muffins' }
    ],
    'F': [
      { id: 'farro', title: 'Farro', path: '/ingredients/farro' },
      { id: 'fish', title: 'Fish', path: '/ingredients/fish' },
      { id: 'flax-seeds', title: 'Flax Seeds', path: '/ingredients/flax-seeds' },
      { id: 'fennel', title: 'Fennel', path: '/ingredients/fennel' },
      { id: 'feta-cheese', title: 'Feta Cheese', path: '/ingredients/feta-cheese' },
      { id: 'flour', title: 'Flour', path: '/ingredients/flour' }
    ],
    'G': [
      { id: 'garlic', title: 'Garlic', path: '/ingredients/garlic' },
      { id: 'goat', title: 'Goat', path: '/ingredients/goat' },
      { id: 'ground-beef', title: 'Ground Beef', path: '/ingredients/ground-beef' },
      { id: 'ground-chicken', title: 'Ground Chicken', path: '/ingredients/ground-chicken' },
      { id: 'ground-pork', title: 'Ground Pork', path: '/ingredients/ground-pork' },
      { id: 'ground-turkey', title: 'Ground Turkey', path: '/ingredients/ground-turkey' },
      { id: 'ginger', title: 'Ginger', path: '/ingredients/ginger' },
      { id: 'grapes', title: 'Grapes', path: '/ingredients/grapes' },
      { id: 'green-beans', title: 'Green Beans', path: '/ingredients/green-beans' }
    ],
    'H': [
      { id: 'ham', title: 'Ham', path: '/ingredients/ham' },
      { id: 'honey', title: 'Honey', path: '/ingredients/honey' },
      { id: 'herbs', title: 'Herbs', path: '/ingredients/herbs' },
      { id: 'hot-sauce', title: 'Hot Sauce', path: '/ingredients/hot-sauce' }
    ],
    'I': [
      { id: 'ice-cream', title: 'Ice Cream', path: '/ingredients/ice-cream' }
    ],
    'J': [
      { id: 'jalapeno', title: 'Jalapeño', path: '/ingredients/jalapeno' },
      { id: 'jam', title: 'Jam', path: '/ingredients/jam' }
    ],
    'K': [
      { id: 'kale', title: 'Kale', path: '/ingredients/kale' },
      { id: 'ketchup', title: 'Ketchup', path: '/ingredients/ketchup' }
    ],
    'L': [
      { id: 'lamb', title: 'Lamb', path: '/ingredients/lamb' },
      { id: 'lemon', title: 'Lemon', path: '/ingredients/lemon' },
      { id: 'lettuce', title: 'Lettuce', path: '/ingredients/lettuce' }
    ],
    'M': [
      { id: 'mangos', title: 'Mangos', path: '/ingredients/mangos' },
      { id: 'maple-syrup', title: 'Maple Syrup', path: '/ingredients/maple-syrup' },
      { id: 'milk', title: 'Milk', path: '/ingredients/milk' },
      { id: 'millet', title: 'Millet', path: '/ingredients/millet' },
      { id: 'mushroom', title: 'Mushroom', path: '/ingredients/mushroom' }
    ],
    'N': [
      { id: 'nectarines', title: 'Nectarines', path: '/ingredients/nectarines' },
      { id: 'noodles', title: 'Noodles', path: '/ingredients/noodles' },
      { id: 'nuts', title: 'Nuts', path: '/ingredients/nuts' }
    ],
    'O': [
      { id: 'oat-flour', title: 'Oat Flour', path: '/ingredients/oat-flour' },
      { id: 'oats', title: 'Oats', path: '/ingredients/oats' },
      { id: 'olive-oil', title: 'Olive Oil', path: '/ingredients/olive-oil' },
      { id: 'onions', title: 'Onions', path: '/ingredients/onions' },
      { id: 'oranges', title: 'Oranges', path: '/ingredients/oranges' }
    ],
    'P': [
      { id: 'papaya', title: 'Papaya', path: '/ingredients/papaya' },
      { id: 'pasta', title: 'Pasta', path: '/ingredients/pasta' },
      { id: 'peaches', title: 'Peaches', path: '/ingredients/peaches' },
      { id: 'peanuts', title: 'Peanuts', path: '/ingredients/peanuts' },
      { id: 'pears', title: 'Pears', path: '/ingredients/pears' },
      { id: 'peas', title: 'Peas', path: '/ingredients/peas' },
      { id: 'peppers', title: 'Peppers', path: '/ingredients/peppers' },
      { id: 'pineapples', title: 'Pineapples', path: '/ingredients/pineapples' },
      { id: 'plums', title: 'Plums', path: '/ingredients/plums' },
      { id: 'pomegranates', title: 'Pomegranates', path: '/ingredients/pomegranates' },
      { id: 'pork', title: 'Pork', path: '/ingredients/pork' },
      { id: 'potatoes', title: 'Potatoes', path: '/ingredients/potatoes' }
    ],
    'Q': [
      { id: 'quail', title: 'Quail', path: '/ingredients/quail' },
      { id: 'quinoa', title: 'Quinoa', path: '/ingredients/quinoa' }
    ],
    'R': [
      { id: 'radishes', title: 'Radishes', path: '/ingredients/radishes' },
      { id: 'raspberries', title: 'Raspberries', path: '/ingredients/raspberries' },
      { id: 'rice', title: 'Rice', path: '/ingredients/rice' }
    ],
    'S': [
      { id: 'salmon', title: 'Salmon', path: '/ingredients/salmon' },
      { id: 'sausage', title: 'Sausage', path: '/ingredients/sausage' },
      { id: 'seafood', title: 'Seafood', path: '/ingredients/seafood' },
      { id: 'shrimp', title: 'Shrimp', path: '/ingredients/shrimp' },
      { id: 'spinach', title: 'Spinach', path: '/ingredients/spinach' },
      { id: 'squash', title: 'Squash', path: '/ingredients/squash' },
      { id: 'strawberries', title: 'Strawberries', path: '/ingredients/strawberries' },
      { id: 'sage', title: 'Sage', path: '/ingredients/sage' },
      { id: 'salad-greens', title: 'Salad Greens', path: '/ingredients/salad-greens' },
      { id: 'scallions', title: 'Scallions', path: '/ingredients/scallions' },
      { id: 'shallots', title: 'Shallots', path: '/ingredients/shallots' },
      { id: 'sour-cream', title: 'Sour Cream', path: '/ingredients/sour-cream' },
      { id: 'soy-sauce', title: 'Soy Sauce', path: '/ingredients/soy-sauce' },
      { id: 'sweet-potatoes', title: 'Sweet Potatoes', path: '/ingredients/sweet-potatoes' }
    ],
    'T': [
      { id: 'tofu', title: 'Tofu', path: '/ingredients/tofu' },
      { id: 'tomatoes', title: 'Tomatoes', path: '/ingredients/tomatoes' },
      { id: 'tuna', title: 'Tuna', path: '/ingredients/tuna' },
      { id: 'turkey', title: 'Turkey', path: '/ingredients/turkey' },
      { id: 'thyme', title: 'Thyme', path: '/ingredients/thyme' },
      { id: 'tortillas', title: 'Tortillas', path: '/ingredients/tortillas' }
    ],
    'U': [
      { id: 'udon-noodles', title: 'Udon Noodles', path: '/ingredients/udon-noodles' }
    ],
    'V': [
      { id: 'vanilla', title: 'Vanilla', path: '/ingredients/vanilla' },
      { id: 'veal', title: 'Veal', path: '/ingredients/veal' },
      { id: 'vegetables', title: 'Vegetables', path: '/ingredients/vegetables' },
      { id: 'venison', title: 'Venison', path: '/ingredients/venison' }
    ],
    'W': [
      { id: 'walnuts', title: 'Walnuts', path: '/ingredients/walnuts' },
      { id: 'watermelon', title: 'Watermelon', path: '/ingredients/watermelon' },
      { id: 'white-rice', title: 'White Rice', path: '/ingredients/white-rice' }
    ],
    'Y': [
      { id: 'yams', title: 'Yams', path: '/ingredients/yams' },
      { id: 'yogurt', title: 'Yogurt', path: '/ingredients/yogurt' }
    ],
    'Z': [
      { id: 'zucchini', title: 'Zucchini', path: '/ingredients/zucchini' }
    ],
    'X': [
      { id: 'xanthan-gum', title: 'Xanthan Gum', path: '/ingredients/xanthan-gum' }
    ]
  };

  return (
    <div className="ingredients-container">
      <div className="ingredients-header">
        <h1>Ingredients A-Z</h1>
        <p className="header-description">
          Find recipes by ingredient. Browse our comprehensive ingredient index to find recipes 
          using specific ingredients.
        </p>
      </div>

      <AlphabeticalIndex 
        onLetterClick={setActiveLetter} 
        activeLetter={activeLetter}
      />

      <div className="ingredients-section">
        <h2 className="letter-heading">{activeLetter}</h2>
        <div className="ingredients-list">
          {ingredientCategories[activeLetter]?.map(ingredient => (
            <Link 
              key={ingredient.id}
              to={ingredient.path}
              className="ingredient-link"
            >
              {ingredient.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="popular-ingredients">
        <h2>Popular Ingredients</h2>
        <div className="popular-grid">
          <Link to="/ingredients/chicken" className="popular-card">
            <img src="/images/ingredients/chicken.jpg" alt="Chicken" />
            <h3>Chicken</h3>
          </Link>
          <Link to="/ingredients/beef" className="popular-card">
            <img src="/images/ingredients/beef.jpg" alt="Beef" />
            <h3>Beef</h3>
          </Link>
          <Link to="/ingredients/seafood" className="popular-card">
            <img src="/images/ingredients/seafood.jpg" alt="Seafood" />
            <h3>Seafood</h3>
          </Link>
          <Link to="/ingredients/vegetables" className="popular-card">
            <img src="/images/ingredients/vegetables.jpg" alt="Vegetables" />
            <h3>Vegetables</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ingredients; 