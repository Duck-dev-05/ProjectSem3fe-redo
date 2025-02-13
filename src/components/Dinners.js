import React from 'react';
import { Link } from 'react-router-dom';
import './Dinners.css';

function Dinners() {
  return (
    <div className="dinners-page">
      {/* Hero Banner Section */}
      <section className="dinners-hero">
        <img className="hero-image" src="/images/img1.jpg" alt="Dinners Banner" />
        <div className="hero-overlay">
          <h1>Dinners</h1>
          <p>Inspiration for your evening meals</p>
        </div>
      </section>

      {/* Dinner Categories Grid */}
      <section className="dinner-categories">
        <div className="category-card">
          <img src="/images/5-ingredient-dinners.jpg" alt="5-Ingredient Dinners" />
          <h2>5-Ingredient Dinners</h2>
        </div>
        <div className="category-card">
          <img src="/images/one-pot-meals.jpg" alt="One-Pot Meals" />
          <h2>One-Pot Meals</h2>
        </div>
        <div className="category-card">
          <img src="/images/quick-easy.jpg" alt="Quick & Easy" />
          <h2>Quick & Easy</h2>
        </div>
        <div className="category-card">
          <img src="/images/30-minute-meals.jpg" alt="30-Minute Meals" />
          <h2>30-Minute Meals</h2>
        </div>
        <div className="category-card">
          <img src="/images/family-dinners.jpg" alt="Family Dinners" />
          <h2>Family Dinners</h2>
        </div>
        <div className="category-card">
          <img src="/images/soups-stews-chili.jpg" alt="Soups, Stews & Chili" />
          <h2>Soups, Stews & Chili</h2>
        </div>
        <div className="category-card">
          <img src="/images/comfort-food.jpg" alt="Comfort Food" />
          <h2>Comfort Food</h2>
        </div>
        <div className="category-card">
          <img src="/images/main-dishes.jpg" alt="Main Dishes" />
          <h2>Main Dishes</h2>
        </div>
        <div className="category-card">
          <img src="/images/sheet-pan-dinners.jpg" alt="Sheet Pan Dinners" />
          <h2>Sheet Pan Dinners</h2>
        </div>
        <Link to="/dinners/all" className="category-card view-all">
          <h2>View All</h2>
        </Link>
      </section>
    </div>
  );
}

export default Dinners; 