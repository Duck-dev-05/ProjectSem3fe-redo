import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('ingredients');

  // This would typically come from an API
  const recipe = {
    id: 1,
    title: "Air Fryer Korean Chicken Wings",
    image: "/images/korean-wings.jpg",
    rating: 4.8,
    reviews: 256,
    prepTime: "15 mins",
    cookTime: "35 mins",
    totalTime: "50 mins",
    servings: 4,
    difficulty: "easy",
    cuisine: "Asian",
    method: "airFryer",
    calories: "320 per serving",
    author: "Chef Sarah Kim",
    datePublished: "2024-03-15",
    description: "Crispy, sweet, and spicy Korean-style chicken wings made easy in the air fryer. Perfect for game day or any occasion!",
    ingredients: [
      "2 lbs chicken wings",
      "1/2 cup gochujang (Korean red chili paste)",
      "1/4 cup soy sauce",
      "3 tablespoons honey",
      "2 tablespoons sesame oil",
      "4 cloves garlic, minced",
      "1-inch ginger, grated",
      "Sesame seeds for garnish",
      "Green onions for garnish"
    ],
    instructions: [
      {
        step: 1,
        text: "Pat chicken wings dry with paper towels and season with salt and pepper."
      },
      {
        step: 2,
        text: "Place wings in air fryer basket, making sure they don't overlap."
      },
      {
        step: 3,
        text: "Air fry at 380°F for 25 minutes, flipping halfway through."
      },
      // Add more steps...
    ],
    nutritionInfo: {
      calories: 320,
      protein: "28g",
      carbs: "12g",
      fat: "18g",
      fiber: "1g",
      sugar: "8g"
    },
    tips: [
      "For extra crispy wings, pat them completely dry before cooking",
      "Don't overcrowd the air fryer basket",
      "Let the wings rest for 5 minutes before tossing in sauce"
    ],
    tags: ["Korean", "Air Fryer", "Chicken", "Appetizer", "Game Day"],
    reviews: [
      {
        id: 1,
        user: "FoodLover123",
        rating: 5,
        date: "2024-03-18",
        comment: "Amazing recipe! The wings came out perfectly crispy."
      }
      // Add more reviews...
    ]
  };

  return (
    <div className="recipe-detail-container">
      <div className="recipe-hero">
        <div className="recipe-hero-content">
          <h1>{recipe.title}</h1>
          <div className="recipe-meta">
            <div className="author-info">
              By <span>{recipe.author}</span> • {recipe.datePublished}
            </div>
            <div className="recipe-stats">
              <span>⭐ {recipe.rating} ({recipe.reviews} reviews)</span>
              <span>🕒 {recipe.totalTime}</span>
              <span>👥 Serves {recipe.servings}</span>
            </div>
          </div>
        </div>
        <div className="recipe-hero-image">
          <img src={recipe.image} alt={recipe.title} />
        </div>
      </div>

      <div className="recipe-content">
        <div className="recipe-sidebar">
          <div className="recipe-quick-info">
            <div className="info-item">
              <span className="label">Prep Time</span>
              <span className="value">{recipe.prepTime}</span>
            </div>
            <div className="info-item">
              <span className="label">Cook Time</span>
              <span className="value">{recipe.cookTime}</span>
            </div>
            <div className="info-item">
              <span className="label">Total Time</span>
              <span className="value">{recipe.totalTime}</span>
            </div>
            <div className="info-item">
              <span className="label">Servings</span>
              <span className="value">{recipe.servings}</span>
            </div>
            <div className="info-item">
              <span className="label">Calories</span>
              <span className="value">{recipe.calories}</span>
            </div>
          </div>

          <div className="recipe-tags">
            {recipe.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="recipe-main">
          <div className="recipe-description">
            <p>{recipe.description}</p>
          </div>

          <div className="recipe-tabs">
            <button 
              className={`tab ${activeTab === 'ingredients' ? 'active' : ''}`}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
            <button 
              className={`tab ${activeTab === 'instructions' ? 'active' : ''}`}
              onClick={() => setActiveTab('instructions')}
            >
              Instructions
            </button>
            <button 
              className={`tab ${activeTab === 'nutrition' ? 'active' : ''}`}
              onClick={() => setActiveTab('nutrition')}
            >
              Nutrition
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'ingredients' && (
              <div className="ingredients-list">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="ingredient-item">
                    <input type="checkbox" id={`ingredient-${index}`} />
                    <label htmlFor={`ingredient-${index}`}>{ingredient}</label>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'instructions' && (
              <div className="instructions-list">
                {recipe.instructions.map((instruction) => (
                  <div key={instruction.step} className="instruction-step">
                    <span className="step-number">{instruction.step}</span>
                    <p>{instruction.text}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="nutrition-info">
                <h3>Nutrition Facts (per serving)</h3>
                <div className="nutrition-grid">
                  {Object.entries(recipe.nutritionInfo).map(([key, value]) => (
                    <div key={key} className="nutrition-item">
                      <span className="label">{key}</span>
                      <span className="value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="recipe-tips">
            <h3>Pro Tips</h3>
            <ul>
              {recipe.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail; 