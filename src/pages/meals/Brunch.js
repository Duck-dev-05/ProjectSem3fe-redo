import React from 'react';
import { Link } from 'react-router-dom';
import '../posts/Posts.css';

const Brunch = () => {
  return (
    <div className="post-container allrecipes-layout">
      <div className="post-header">
        <div className="header-content">
          <h1>Brunch Recipes</h1>
          <p className="header-description">
            Enjoy these delightful brunch recipes that are perfect for lazy weekends!
          </p>
        </div>
      </div>
      {/* Add your brunch recipes here */}
    </div>
  );
};

export default Brunch; 