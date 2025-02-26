import React from 'react';
import { Link } from 'react-router-dom';
import './Meals.css';

function Meals() {
  return (
    <div className="meals-page">
      {/* Hero Banner Section */}
      <section className="meals-hero">
        <img className="hero-image" src="/images/meals-banner.jpg" alt="Meals Banner" />
        <div className="hero-overlay">
          <h1>Meals</h1>
          <p>Explore delicious recipes for every meal</p>
        </div>
      </section>

      {/* Meals Categories Grid */}
      <section className="meals-categories">
        <div className="category-card">
          <img src="/images/breakfast-brunch.jpg" alt="Breakfast & Brunch" />
          <h2>Breakfast & Brunch</h2>
        </div>
        <div className="category-card">
          <img src="/images/lunch.jpg" alt="Lunch" />
          <h2>Lunch</h2>
        </div>
        <div className="category-card">
          <img src="/images/healthy.jpg" alt="Healthy" />
          <h2>Healthy</h2>
        </div>
        <div className="category-card">
          <img src="/images/appetizers-snacks.jpg" alt="Appetizers & Snacks" />
          <h2>Appetizers & Snacks</h2>
        </div>
        <div className="category-card">
          <img src="/images/salads.jpg" alt="Salads" />
          <h2>Salads</h2>
        </div>
        <div className="category-card">
          <img src="/images/side-dishes.jpg" alt="Side Dishes" />
          <h2>Side Dishes</h2>
        </div>
        <div className="category-card">
          <img src="/images/soups.jpg" alt="Soups" />
          <h2>Soups</h2>
        </div>
        <div className="category-card">
          <img src="/images/bread.jpg" alt="Bread" />
          <h2>Bread</h2>
        </div>
        <div className="category-card">
          <img src="/images/drinks.jpg" alt="Drinks" />
          <h2>Drinks</h2>
        </div>
        <div className="category-card">
          <img src="/images/desserts.jpg" alt="Desserts" />
          <h2>Desserts</h2>
        </div>
        <div className="category-card">
          <img src="/images/instant-pot.jpg" alt="Instant Pot" />
          <h2>Instant Pot</h2>
        </div>
        {/* "View All" Link */}
        <Link to="/meals/all" className="category-card view-all">
          <h2>View All</h2>
        </Link>
      </section>
    </div>
  );
}

export default Meals; 