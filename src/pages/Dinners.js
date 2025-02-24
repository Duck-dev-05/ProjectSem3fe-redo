import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Dinners = () => {
  const dinnerCategories = [
    {
      id: '5-ingredient',
      title: '5-Ingredient Dinners',
      image: '/images/5-ingredient-dinners.jpg',
      path: '/category/dinners/5-ingredient'
    },
    {
      id: 'one-pot',
      title: 'One-Pot Meals',
      image: '/images/one-pot-meals.jpg',
      path: '/category/dinners/one-pot'
    },
    {
      id: 'quick-easy',
      title: 'Quick & Easy',
      image: '/images/quick-easy.jpg',
      path: '/category/dinners/quick-easy'
    },
    {
      id: '30-minute',
      title: '30-Minute Meals',
      image: '/images/30-minute-meals.jpg',
      path: '/category/dinners/30-minute'
    },
    {
      id: 'family',
      title: 'Family Dinners',
      image: '/images/family-dinners.jpg',
      path: '/category/dinners/family'
    },
    {
      id: 'soups-stews',
      title: 'Soups, Stews & Chili',
      image: '/images/soups-stews.jpg',
      path: '/category/dinners/soups-stews'
    },
    {
      id: 'comfort-food',
      title: 'Comfort Food',
      image: '/images/comfort-food.jpg',
      path: '/category/dinners/comfort-food'
    },
    {
      id: 'main-dishes',
      title: 'Main Dishes',
      image: '/images/main-dishes.jpg',
      path: '/category/dinners/main-dishes'
    },
    {
      id: 'sheet-pan',
      title: 'Sheet Pan Dinners',
      image: '/images/sheet-pan-dinners.jpg',
      path: '/category/dinners/sheet-pan'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Dinner Recipes</h1>
        <p>Find the perfect dinner recipe for any night of the week</p>
      </div>
      
      <div className="category-grid">
        {dinnerCategories.map(category => (
          <Link 
            to={category.path}
            key={category.id} 
            className="category-card"
          >
            <div className="category-image">
              <img src={category.image} alt={category.title} />
            </div>
            <div className="category-content">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dinners; 