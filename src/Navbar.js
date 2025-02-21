import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import './Navbar.css'; // Import the CSS for the Navbar

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user, logout } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleMouseEnter = (category) => {
    setActiveDropdown(category);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Recipe Hub</Link>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="search"
            placeholder="Search for recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <nav className="navbar">
          <ul className="navbar-menu">
            <li onMouseEnter={() => handleMouseEnter('dinners')} onMouseLeave={handleMouseLeave}>
              <Link to="/dinners">Dinners</Link>
              {activeDropdown === 'dinners' && (
                <ul className="dropdown-menu">
                  <li><Link to="/category/dinners/5-ingredient">5-Ingredient Dinners</Link></li>
                  <li><Link to="/category/dinners/one-pot">One-Pot Meals</Link></li>
                  <li><Link to="/category/dinners/quick-easy">Quick & Easy</Link></li>
                  <li><Link to="/category/dinners/30-minute">30-Minute Meals</Link></li>
                  <li><Link to="/category/dinners/family">Family Dinners</Link></li>
                  <li><Link to="/category/dinners/soups-stews">Soups & Stews</Link></li>
                </ul>
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter('meals')} onMouseLeave={handleMouseLeave}>
              <Link to="/meals">Meals</Link>
              {activeDropdown === 'meals' && (
                <ul className="dropdown-menu">
                  <li><Link to="/category/meals/breakfast-brunch">Breakfast & Brunch</Link></li>
                  <li><Link to="/category/meals/lunch">Lunch</Link></li>
                  <li><Link to="/category/meals/healthy">Healthy</Link></li>
                  <li><Link to="/category/meals/appetizers">Appetizers & Snacks</Link></li>
                  <li><Link to="/category/meals/salads">Salads</Link></li>
                  <li><Link to="/category/meals/soups">Soups</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/ingredients">Ingredients</Link></li>
            <li><Link to="/occasions">Occasions</Link></li>
            <li><Link to="/cuisines">Cuisines</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="user-actions">
          {user ? (
            <div className="user-menu">
              <span>{user.firstName}</span>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="auth-button">Login</Link>
              <Link to="/signup" className="auth-button">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar; 