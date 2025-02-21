import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../posts/Posts.css';

const Desserts = () => {
  // ... similar structure with dessert-specific content
  const recipes = [
    {
      id: 'chocolate-chip-cookies',
      title: 'Perfect Chocolate Chip Cookies',
      image: '/images/choc-chip-cookies.jpg',
      rating: 4.9,
      reviews: 8923,
      cookTime: '25 mins',
      difficulty: 'easy',
      ingredients: ['flour', 'butter', 'chocolate chips', 'eggs', 'vanilla'],
      author: 'Chef Lisa',
      description: 'Soft and chewy cookies with perfect crispy edges.',
      tags: ['cookies', 'baking', 'kid-friendly', 'classic']
    }
    // ... more dessert recipes
  ];
}; 