import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();

  return (
    <div className="recipe-detail-container">
      <h1>Recipe Details</h1>
      <p>Recipe ID: {id}</p>
      {/* Add recipe details here */}
    </div>
  );
};

export default RecipeDetail; 