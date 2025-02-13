import React from 'react';
import { Link } from 'react-router-dom';
import './CuisinesAll.css';

function CuisinesAll() {
  // List 8 cuisines (the 8th is "Greek")
  const cuisines = [
    { id: 1, title: "Mexican", image: '/images/mexican.jpg' },
    { id: 2, title: "Italian", image: '/images/italian.jpg' },
    { id: 3, title: "Chinese", image: '/images/chinese.jpg' },
    { id: 4, title: "Indian", image: '/images/indian.jpg' },
    { id: 5, title: "Japanese", image: '/images/japanese.jpg' },
    { id: 6, title: "French", image: '/images/french.jpg' },
    { id: 7, title: "Thai", image: '/images/thai.jpg' },
    { id: 8, title: "Greek", image: '/images/greek.jpg' },
  ];

  return (
    <div className="cuisines-all-page">
      <h1>All Cuisines</h1>
      <div className="cuisines-grid">
        {cuisines.map((cuisine) => (
          <Link
            key={cuisine.id}
            to={`/cuisines/${encodeURIComponent(cuisine.title)}`}
            className="cuisine-card"
          >
            <img src={cuisine.image} alt={cuisine.title} />
            <h2>{cuisine.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CuisinesAll; 