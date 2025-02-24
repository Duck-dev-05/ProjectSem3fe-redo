import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

const AllDinnerTopics = () => {
  const topics = [
    {
      id: '5-ingredient',
      title: '5-Ingredient Dinners',
      description: 'Simple and delicious meals with just 5 ingredients.',
    },
    {
      id: 'one-pot',
      title: 'One-Pot Meals',
      description: 'Easy cleanup with these one-pot dinner solutions.',
    },
    {
      id: 'quick-easy',
      title: 'Quick & Easy Recipes',
      description: 'Delicious meals ready in a flash!',
    },
    {
      id: '30-minute',
      title: '30-Minute Meals',
      description: 'Meals that can be prepared in 30 minutes or less.',
    },
    {
      id: 'family',
      title: 'Family Dinners',
      description: 'Hearty meals perfect for the whole family.',
    },
    {
      id: 'soups-stews',
      title: 'Soups, Stews & Chili',
      description: 'Warm up with these hearty recipes!',
    },
    {
      id: 'comfort-food',
      title: 'Comfort Food',
      description: 'Hearty meals that warm the soul!',
    },
    {
      id: 'main-dishes',
      title: 'Main Dishes',
      description: 'Hearty and satisfying meals for any occasion!',
    },
    {
      id: 'sheet-pan',
      title: 'Sheet Pan Dinners',
      description: 'Easy meals with minimal cleanup!',
    },
  ];

  return (
    <div className="post-container">
      <div className="post-header">
        <h1>All Dinner Topics</h1>
        <p>Explore all our delicious dinner topics!</p>
      </div>
      <div className="recipes-grid">
        {topics.map(topic => (
          <div key={topic.id} className="topic-card">
            <Link to={`/dinners/${topic.id}`}>
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDinnerTopics; 