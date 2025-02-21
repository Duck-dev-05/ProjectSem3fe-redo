import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = () => {
  const { query } = useParams();

  // This would typically come from an API
  const searchResults = {
    chicken: [
      {
        id: 1,
        title: "Classic Chicken Parmesan",
        image: "/images/chicken-parmesan.jpg",
        ratings: 1458,
        averageRating: 4.8,
        cookTime: "45 mins",
        description: "Crispy breaded chicken topped with marinara and melted cheese."
      },
      {
        id: 2,
        title: "Easy Chicken Stir-Fry",
        image: "/images/chicken-stirfry.jpg",
        ratings: 892,
        averageRating: 4.6,
        cookTime: "30 mins",
        description: "Quick and healthy chicken stir-fry with vegetables."
      },
      {
        id: 3,
        title: "Grilled BBQ Chicken",
        image: "/images/bbq-chicken.jpg",
        ratings: 723,
        averageRating: 4.7,
        cookTime: "40 mins",
        description: "Juicy grilled chicken with homemade BBQ sauce."
      }
    ],
    // Add more categories as needed
  };

  const results = searchResults[query.toLowerCase()] || [];

  return (
    <div className="search-results-container">
      <div className="search-header">
        <h1>Search Results for "{query}"</h1>
        <p>{results.length} recipes found</p>
      </div>

      <div className="search-filters">
        <select defaultValue="relevance">
          <option value="relevance">Sort by Relevance</option>
          <option value="rating">Sort by Rating</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>

      <div className="results-grid">
        {results.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="result-card">
            <div className="result-image">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="result-content">
              <h2>{recipe.title}</h2>
              <p className="description">{recipe.description}</p>
              <div className="result-meta">
                <span>{recipe.ratings} Ratings</span>
                <span>{recipe.averageRating} Stars</span>
                <span>{recipe.cookTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults; 