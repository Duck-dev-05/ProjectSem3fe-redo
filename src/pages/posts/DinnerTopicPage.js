import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Posts.css';

const DinnerTopicPage = () => {
  const { topicId } = useParams();

  // Database of all dinner topics and their recipes
  const topicsData = {
    'one-pot': {
      title: 'One-Pot Meals',
      description: 'Easy cleanup with these one-pot dinner solutions.',
      recipes: [
        {
          id: 'one-pot-pasta',
          title: 'One-Pot Creamy Mushroom Pasta',
          image: '/images/mushroom-pasta.jpg',
          rating: 4.7,
          reviews: 189,
          cookTime: '30 mins',
          difficulty: 'easy',
          ingredients: ['pasta', 'mushrooms', 'cream', 'garlic', 'parmesan'],
          author: 'Chef Marco',
          description: 'A delicious pasta dish that comes together in one pot.'
        },
        {
          id: 'chicken-rice',
          title: 'One-Pot Chicken and Rice',
          image: '/images/chicken-rice.jpg',
          rating: 4.8,
          reviews: 245,
          cookTime: '45 mins',
          difficulty: 'medium',
          ingredients: ['chicken', 'rice', 'vegetables', 'broth', 'herbs'],
          author: 'Chef Sarah',
          description: 'Classic comfort food made simple in one pot.'
        }
      ]
    },
    'quick-easy': {
      title: 'Quick & Easy Dinners',
      description: 'Delicious dinners ready in a flash.',
      recipes: [
        {
          id: 'quick-stir-fry',
          title: '15-Minute Chicken Stir Fry',
          image: '/images/stir-fry.jpg',
          rating: 4.6,
          reviews: 167,
          cookTime: '15 mins',
          difficulty: 'easy',
          ingredients: ['chicken', 'vegetables', 'soy sauce', 'garlic', 'ginger'],
          author: 'Chef Lee',
          description: 'A quick and healthy stir fry for busy weeknights.'
        }
      ]
    },
    '30-minute': {
      title: '30-Minute Meals',
      description: 'Complete meals ready in 30 minutes or less.',
      recipes: [
        {
          id: 'quick-salmon',
          title: 'Pan-Seared Salmon',
          image: '/images/salmon.jpg',
          rating: 4.9,
          reviews: 203,
          cookTime: '25 mins',
          difficulty: 'easy',
          ingredients: ['salmon', 'lemon', 'butter', 'herbs', 'garlic'],
          author: 'Chef Michael',
          description: 'Restaurant-quality salmon in under 30 minutes.'
        }
      ]
    }
    // Add more topics as needed
  };

  const topic = topicsData[topicId];

  if (!topic) {
    return (
      <div className="topic-not-found">
        <h2>Topic Not Found</h2>
        <p>The dinner category you're looking for doesn't exist.</p>
        <Link to="/dinners" className="back-link">Back to Dinner Categories</Link>
      </div>
    );
  }

  return (
    <div className="post-container">
      <div className="post-header">
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
      </div>

      <div className="filters-bar">
        <select className="filter-select">
          <option value="newest">Newest First</option>
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
        </select>

        <div className="difficulty-filters">
          <button className="filter-button active">All</button>
          <button className="filter-button">Easy</button>
          <button className="filter-button">Medium</button>
          <button className="filter-button">Hard</button>
        </div>
      </div>

      <div className="recipes-grid">
        {topic.recipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
              <span className="recipe-difficulty">{recipe.difficulty}</span>
            </div>
            <div className="recipe-content">
              <h2>{recipe.title}</h2>
              <p className="recipe-description">{recipe.description}</p>
              <div className="recipe-meta">
                <div className="rating">
                  <span className="stars">{'★'.repeat(Math.floor(recipe.rating))}</span>
                  <span className="rating-number">{recipe.rating}</span>
                  <span className="reviews">({recipe.reviews})</span>
                </div>
                <div className="cook-time">
                  <span className="icon">⏰</span>
                  {recipe.cookTime}
                </div>
              </div>
              <div className="ingredients-preview">
                <h3>Ingredients:</h3>
                <p>{recipe.ingredients.join(', ')}</p>
              </div>
              <div className="recipe-author">
                By {recipe.author}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DinnerTopicPage; 