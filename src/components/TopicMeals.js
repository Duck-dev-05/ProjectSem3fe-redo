import React from 'react';
import { useParams } from 'react-router-dom';
import './TopicMeals.css';

function TopicMeals() {
  // Retrieve the topic from the URL using the useParams hook.
  const { topic } = useParams();

  // Placeholder recipes for this topic.
  const recipes = [
    { id: 1, title: `${topic} Recipe 1`, image: '/images/img1.jpg' },
    { id: 2, title: `${topic} Recipe 2`, image: '/images/img1.jpg' },
    { id: 3, title: `${topic} Recipe 3`, image: '/images/img1.jpg' },
    { id: 4, title: `${topic} Recipe 4`, image: '/images/img1.jpg' },
    // You can add more recipe cards here as needed.
  ];

  return (
    <div className="topic-meals-page">
      <h1>Recipes for {topic}</h1>
      <div className="recipes-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicMeals; 