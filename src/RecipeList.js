import React from 'react';

const RecipeList = () => {
  const recipes = [
    { id: 1, title: 'Chicken Curry' },
    { id: 2, title: 'Pasta Primavera' },
    { id: 3, title: 'Beef Stroganoff' },
    { id: 4, title: 'Vegetable Stir Fry' },
    { id: 5, title: 'Chocolate Chip Cookies' },
  ];

  return (
    <div className="recipe-section">
      <h2>Featured Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList; 