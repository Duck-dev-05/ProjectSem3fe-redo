import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './RecipeDetailView.css';

const RecipeDetailView = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const recipeDetails = {
    'simple-pasta': {
      title: '5-Ingredient Creamy Pasta',
      image: '/images/creamy-pasta.jpg',
      rating: 4.8,
      reviews: 245,
      prepTime: '10 mins',
      cookTime: '20 mins',
      totalTime: '30 mins',
      servings: 4,
      difficulty: 'easy',
      author: 'Chef Maria',
      description: 'A quick and luxurious pasta dish that comes together in minutes.',
      ingredients: [
        '1 pound fettuccine pasta',
        '2 cups heavy cream',
        '1 cup freshly grated Parmesan cheese',
        '4 cloves garlic, minced',
        '1/2 cup butter'
      ],
      instructions: [
        'Bring a large pot of salted water to boil. Cook pasta according to package directions.',
        'While pasta cooks, melt butter in a large skillet over medium heat. Add minced garlic and sauté until fragrant.',
        'Pour in heavy cream and bring to a simmer. Cook for 5 minutes until slightly thickened.',
        'Add Parmesan cheese and stir until melted and sauce is smooth.',
        'Drain pasta and add to the sauce, tossing to coat evenly.',
        'Serve immediately with extra Parmesan cheese if desired.'
      ],
      nutritionInfo: {
        calories: '650',
        protein: '18g',
        carbs: '55g',
        fat: '42g'
      },
      tips: [
        'Reserve some pasta water before draining to thin the sauce if needed',
        'Use freshly grated Parmesan for the smoothest sauce',
        'Don\'t overcook the garlic to avoid bitter taste'
      ]
    }
    // Add more recipes here
  };

  const recipe = recipeDetails[id];

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <Link to="/dinners" className="back-link">Back to Dinner Recipes</Link>
      </div>
    );
  }

  return (
    <div className="recipe-detail-view">
      <div className="recipe-hero">
        <div className="recipe-hero-content">
          <h1>{recipe.title}</h1>
          <div className="recipe-meta">
            <div className="rating-reviews">
              <span className="stars">{'★'.repeat(Math.floor(recipe.rating))}</span>
              <span className="rating-number">{recipe.rating}</span>
              <span className="reviews">({recipe.reviews} reviews)</span>
            </div>
            <div className="author">By {recipe.author}</div>
          </div>
          <p className="description">{recipe.description}</p>
        </div>
        <div className="recipe-hero-image">
          <img src={recipe.image} alt={recipe.title} />
        </div>
      </div>

      <div className="recipe-details-grid">
        <div className="recipe-main-content">
          <section className="ingredients-section">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <label>
                    <input type="checkbox" />
                    <span>{ingredient}</span>
                  </label>
                </li>
              ))}
            </ul>
          </section>

          <section className="instructions-section">
            <h2>Instructions</h2>
            <ol className="instructions-list">
              {recipe.instructions.map((step, index) => (
                <li key={index}>
                  <span className="step-number">{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="tips-section">
            <h2>Recipe Tips</h2>
            <ul className="tips-list">
              {recipe.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="recipe-sidebar">
          <div className="recipe-info-card">
            <div className="info-item">
              <span className="icon">⏲️</span>
              <div className="info-content">
                <h3>Prep Time</h3>
                <p>{recipe.prepTime}</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">🍳</span>
              <div className="info-content">
                <h3>Cook Time</h3>
                <p>{recipe.cookTime}</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">⌛</span>
              <div className="info-content">
                <h3>Total Time</h3>
                <p>{recipe.totalTime}</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">🍽️</span>
              <div className="info-content">
                <h3>Servings</h3>
                <p>{recipe.servings}</p>
              </div>
            </div>
          </div>

          <div className="nutrition-card">
            <h2>Nutrition Information</h2>
            <div className="nutrition-grid">
              {Object.entries(recipe.nutritionInfo).map(([key, value]) => (
                <div key={key} className="nutrition-item">
                  <h3>{key}</h3>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailView; 