import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to JamesThew</h1>
        <p>Discover delicious recipes and cooking inspiration</p>
      </header>
      
      <section className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipe-grid">
          {/* Add featured recipes here */}
        </div>
      </section>

      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-grid">
          {/* Add categories here */}
        </div>
      </section>
    </div>
  );
};

export default Home; 