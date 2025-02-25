import React from 'react';
import { Link } from 'react-router-dom';
import '../posts/Posts.css';

const Bread = () => {
  return (
    <div className="post-container allrecipes-layout">
      <div className="post-header">
        <div className="header-content">
          <h1>Bread Recipes</h1>
          <p className="header-description">
            Discover a variety of delicious bread recipes that are perfect for any occasion!
          </p>
        </div>
      </div>
      {/* Add your bread recipes here */}
    </div>
  );
};

export default Bread; 