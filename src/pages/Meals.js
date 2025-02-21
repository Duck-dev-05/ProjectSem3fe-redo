import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Meals = () => {
  const mealCategories = [
    {
      id: 'breakfast',
      title: 'Breakfast & Brunch',
      image: '/images/breakfast.jpg',
      count: '342 recipes',
      description: 'Start your day with these delicious breakfast recipes.'
    },
    {
      id: 'lunch',
      title: 'Lunch Ideas',
      image: '/images/lunch.jpg',
      count: '256 recipes',
      description: 'Quick and easy lunch recipes for any day.'
    },
    // ... other meal categories
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Meal Type Recipes</h1>
        <p>Find recipes for every meal of the day</p>
      </div>
      
      <div className="category-grid">
        {mealCategories.map(category => (
          <Link 
            to={`/category/meals/${category.id}`} 
            key={category.id} 
            className="category-card"
          >
            <div className="category-image">
              <img src={category.image} alt={category.title} />
            </div>
            <div className="category-content">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="recipe-count">{category.count}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Meals; 