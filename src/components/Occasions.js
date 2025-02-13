import React from 'react';
import { Link } from 'react-router-dom';
import './Occasions.css';

function Occasions() {
  // Array of occasion categories with their corresponding images.
  const occasions = [
    { id: 1, title: "Valentine's Day", image: '/images/valentines.jpg' },
    { id: 2, title: "Ramadan", image: '/images/ramadan.jpg' },
    { id: 3, title: "Mardi Gras", image: '/images/mardigras.jpg' },
    { id: 4, title: "St. Patrick's Day", image: '/images/stpatricks.jpg' },
    { id: 5, title: "View All", image: '/images/viewall.jpg' },
  ];

  return (
    <div className="occasions-page">
      <h1>Occasions</h1>
      <div className="occasions-grid">
        {occasions.map((occasion) => (
          <Link
            key={occasion.id}
            to={occasion.title === "View All" ? "/occasions/all" : `/occasions/${encodeURIComponent(occasion.title)}`}
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

export default Occasions; 