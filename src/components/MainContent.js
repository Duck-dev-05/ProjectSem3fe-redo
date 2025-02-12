import React from 'react';
import './MainContent.css';
import heroBanner from '../components/images/img1.jpg';
import featured1 from '../components/images/img1.jpg';
import featured2 from '../components/images/img1.jpg';
import featured3 from '../components/images/img1.jpg';
import featured4 from '../components/images/img1.jpg';
import latest1 from '../components/images/img1.jpg';
import latest2 from '../components/images/img1.jpg';
import latest3 from '../components/images/img1.jpg';
import latest4 from '../components/images/img1.jpg';

function MainContent() {
  return (
    <div className="main-content">
      <section className="hero">
        <img src={heroBanner} alt="Hero Banner" className="hero-banner" />
        <div className="hero-text">
          <h1>Discover Delicious Recipes</h1>
          <p>
            Find the best recipes for every occasion—from quick dinners to festive treats!
          </p>
          <input type="text" className="search-input" placeholder="What would you like to cook?" />
        </div>
      </section>
      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-list">
          <div className="category-item">5-Ingredient Dinners</div>
          <div className="category-item">One-Pot Meals</div>
          <div className="category-item">Quick &amp; Easy</div>
          <div className="category-item">Family Dinners</div>
          <div className="category-item">Soups &amp; Stews</div>
          <div className="category-item">Desserts</div>
        </div>
      </section>
      <section className="trending">
        <h2>Trending Now</h2>
        <div className="trending-list">
          <div className="trending-item">
            <img src={featured1} alt="Featured Recipe 1" />
            <span>Featured Recipe 1</span>
          </div>
          <div className="trending-item">
            <img src={featured2} alt="Featured Recipe 2" />
            <span>Featured Recipe 2</span>
          </div>
          <div className="trending-item">
            <img src={featured3} alt="Featured Recipe 3" />
            <span>Featured Recipe 3</span>
          </div>
          <div className="trending-item">
            <img src={featured4} alt="Featured Recipe 4" />
            <span>Featured Recipe 4</span>
          </div>
        </div>
      </section>
      <section className="latest">
        <h2>Latest Recipes</h2>
        <div className="latest-list">
          <div className="latest-item">
            <img src={latest1} alt="Latest Recipe 1" />
            <span>Latest Recipe 1</span>
          </div>
          <div className="latest-item">
            <img src={latest2} alt="Latest Recipe 2" />
            <span>Latest Recipe 2</span>
          </div>
          <div className="latest-item">
            <img src={latest3} alt="Latest Recipe 3" />
            <span>Latest Recipe 3</span>
          </div>
          <div className="latest-item">
            <img src={latest4} alt="Latest Recipe 4" />
            <span>Latest Recipe 4</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainContent; 