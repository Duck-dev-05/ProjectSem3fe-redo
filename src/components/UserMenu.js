import React from 'react';
import { Link } from 'react-router-dom';
import './UserMenu.css';

const UserMenu = ({ isLoggedIn, onLogout }) => {
    return (
        <div className="user-menu-dropdown">
            {isLoggedIn ? (
                <>
                    <Link to="/my-profile" className="menu-item">My Profile</Link>
                    <Link to="/saved-recipes" className="menu-item">Saved Recipes & Collections</Link>
                    <Link to="/add-recipe" className="menu-item">Add a Recipe</Link>
                    <Link to="/help" className="menu-item">Help</Link>
                    <button onClick={onLogout} className="menu-item logout-button">Log Out</button>
                </>
            ) : (
                <>
                    <Link to="/login" className="menu-item">Log In</Link>
                    <Link to="/signup" className="menu-item">Sign Up</Link>
                    <Link to="/help" className="menu-item">Help</Link>
                </>
            )}
        </div>
    );
};

export default UserMenu; 