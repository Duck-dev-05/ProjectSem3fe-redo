import React from 'react';
import { Link } from 'react-router-dom';
import './AllMeals.css'; // Ensure you create this CSS file for styling

const AllMeals = () => {
  const mealCategories = [
    { id: 'breakfast', title: 'Breakfast', image: '/images/breakfast.jpg' },
    { id: 'lunch', title: 'Lunch', image: '/images/lunch.jpg' },
    { id: 'healthy', title: 'Healthy', image: '/images/healthy.jpg' },
    { id: 'appetizers', title: 'Appetizers', image: '/images/appetizers.jpg' },
    { id: 'salads', title: 'Salads', image: '/images/salads.jpg' },
    { id: 'soups', title: 'Soups', image: '/images/soups.jpg' },
    { id: 'bread', title: 'Bread', image: '/images/bread.jpg' },
    { id: 'drinks', title: 'Drinks', image: '/images/drinks.jpg' },
    { id: 'desserts', title: 'Desserts', image: '/images/desserts.jpg' },
  ];

  return (
    <div className="all-meals-page">
      <h1>All Meal Categories</h1>
      <div className="meals-grid">
        {mealCategories.map(category => (
          <Link key={category.id} to={`/meals/${category.id}`} className="meal-card">
            <img src={category.image} alt={category.title} />
            <h2>{category.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllMeals; 