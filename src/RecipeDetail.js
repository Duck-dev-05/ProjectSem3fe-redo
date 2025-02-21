import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();

  // This would typically come from an API
  const recipe = {
    id: id,
    title: "Million Dollar Potato Casserole",
    image: "/images/potato-casserole.jpg",
    prepTime: "20 mins",
    cookTime: "1 hr",
    totalTime: "1 hr 20 mins",
    servings: "8",
    ingredients: [
      "2 pounds potatoes, peeled and cubed",
      "1 cup sour cream",
      "8 ounces cream cheese, softened",
      "1/2 cup butter, melted",
      "1/2 cup shredded cheddar cheese",
      "2 cloves garlic, minced",
      "1 teaspoon salt",
      "1/2 teaspoon black pepper"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C)",
      "Boil potatoes until tender, about 15 minutes",
      "Mash potatoes with sour cream, cream cheese, and butter",
      "Stir in garlic, salt, and pepper",
      "Transfer to a baking dish",
      "Top with cheddar cheese",
      "Bake for 30-35 minutes until golden brown"
    ],
    ratings: 245,
    averageRating: 4.8,
    author: "Chef John",
    datePublished: "2024-02-15"
  };

  return (
    <div className="recipe-detail-container">
      <div className="recipe-header">
        <h1>{recipe.title}</h1>
        <div className="recipe-meta">
          <span>By {recipe.author}</span>
          <span>Published {recipe.datePublished}</span>
          <span>{recipe.ratings} Ratings</span>
          <span>{recipe.averageRating} Stars</span>
        </div>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src={recipe.image} alt={recipe.title} />
        </div>

        <div className="recipe-info">
          <div className="time-info">
            <div>
              <h3>Prep Time:</h3>
              <p>{recipe.prepTime}</p>
            </div>
            <div>
              <h3>Cook Time:</h3>
              <p>{recipe.cookTime}</p>
            </div>
            <div>
              <h3>Total Time:</h3>
              <p>{recipe.totalTime}</p>
            </div>
            <div>
              <h3>Servings:</h3>
              <p>{recipe.servings}</p>
            </div>
          </div>

          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="instructions">
            <h2>Instructions</h2>
            <ol>
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail; 