import React from 'react';
import { Link } from 'react-router-dom';
import './AppetizerItem.css';

const AppetizerItem = ({ appetizer }) => {
  return (
    <Link to={`/appetizers/${appetizer.id}`} className="appetizer-item">
      <img src={appetizer.image} alt={appetizer.title} />
      <h3>{appetizer.title}</h3>
    </Link>
  );
};

export default AppetizerItem; 