import React from 'react';
import { useParams } from 'react-router-dom';
import './IngredientDetail.css';

function IngredientDetail() {
  // Extract the ingredient category from the URL.
  const { ingredient } = useParams();

  return (
    <div className="ingredient-detail-page">
      <h1>{ingredient} Recipes</h1>
      <p>This page will display recipes that feature {ingredient}.</p>
      {/* Here you can add additional content like a list of recipes for this ingredient */}
    </div>
  );
}

export default IngredientDetail; 