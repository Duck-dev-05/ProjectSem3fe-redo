import React from 'react';
import { Link } from 'react-router-dom';
import './OccasionsAll.css';

function OccasionsAll() {
  // For the "all" view, we list all occasions (excluding the "View All" option).
  const occasions = [
    { id: 1, title: "Valentine's Day", image: '/images/valentines.jpg' },
    { id: 2, title: "Ramadan", image: '/images/ramadan.jpg' },
    { id: 3, title: "Mardi Gras", image: '/images/mardigras.jpg' },
    { id: 4, title: "St. Patrick's Day", image: '/images/stpatricks.jpg' },
  ];

  return (
    <div className="occasions-all-page">
      <h1>All Occasions</h1>
      <div className="occasions-grid">
        {occasions.map((occasion) => (
          <Link
            key={occasion.id}
            to={`/occasions/${encodeURIComponent(occasion.title)}`}
            className="occasion-card"
          >
            <img src={occasion.image} alt={occasion.title} />
            <h2>{occasion.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OccasionsAll; 