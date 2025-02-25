import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import './Navbar.css';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <header className="nav-header">
            <div className="utility-bar">
                <div className="nav-container">
                    <div className="utility-links">
                        <Link to="/magazine">Magazine</Link>
                        <Link to="/subscribe">Subscribe</Link>
                        <Link to="/newsletter">Newsletter</Link>
                        <Link to="/sweepstakes">Sweepstakes</Link>
                    </div>
                    <div className="auth-links">
                        {!user ? (
                            <>
                                <Link to="/login">Log In</Link>
                                <span className="divider">|</span>
                                <Link to="/signup">Sign Up</Link>
                            </>
                        ) : (
                            <div className="user-menu">
                                <button className="user-menu-button">My Account</button>
                                <div className="user-dropdown">
                                    <Link to="/profile">My Profile</Link>
                                    <Link to="/saved-recipes">Saved Recipes & Collections</Link>
                                    <Link to="/add-recipe">Add a Recipe</Link>
                                    <Link to="/help">Help</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="main-header">
                <div className="nav-container">
                    <Link to="/" className="logo">JamesThew</Link>
                    <SearchBar />
                </div>
            </div>

            <nav className="main-nav">
                <div className="nav-container">
                    <ul className="nav-menu">
                        <li className="menu-item">
                            <Link to="/dinners" className="menu-button">Dinners</Link>
                            <div className="submenu">
                                <Link to="/dinners/5-ingredient">5-Ingredient Dinners</Link>
                                <Link to="/dinners/one-pot">One-Pot Meals</Link>
                                <Link to="/dinners/quick-easy">Quick & Easy Recipes</Link>
                                <Link to="/dinners/30-minute">30-Minute Meals</Link>
                                <Link to="/dinners/family">Family Dinners</Link>
                                <Link to="/dinners/soups-stews">Soups, Stews & Chili</Link>
                                <Link to="/dinners/comfort-food">Comfort Food</Link>
                                <Link to="/dinners/main-dishes">Main Dishes</Link>
                                <Link to="/dinners/sheet-pan">Sheet Pan Dinners</Link>
                                <Link to="/dinners/all-topics" className="view-all">View All</Link>
                            </div>
                        </li>

                        <li className="menu-item">
                            <Link to="/meals" className="menu-button">Meals</Link>
                            <div className="submenu">
                                <Link to="/meals/breakfast">Breakfast</Link>
                                <Link to="/meals/lunch">Lunch</Link>
                                <Link to="/meals/healthy">Healthy</Link>
                                <Link to="/salads">Salads</Link>
                                <Link to="/appetizers">Appetizers</Link>
                                <Link to="/soups">Soups</Link>
                                <Link to="/meals/bread">Bread</Link>
                                <Link to="/meals/drinks">Drinks</Link>
                                <Link to="/meals/desserts">Desserts</Link>
                                <Link to="/meals" className="view-all">View All</Link>
                            </div>
                        </li>

                        <li className="menu-item">
                            <Link to="/ingredients" className="menu-button">Ingredients</Link>
                            <div className="submenu">
                                <Link to="/ingredients/chicken">Chicken</Link>
                                <Link to="/ingredients/beef">Beef</Link>
                                <Link to="/ingredients/pork">Pork</Link>
                                <Link to="/ingredients/seafood">Seafood</Link>
                                <Link to="/ingredients/pasta">Pasta</Link>
                                <Link to="/ingredients/fruits">Fruits</Link>
                                <Link to="/ingredients/vegetables">Vegetables</Link>
                                <Link to="/ingredients" className="view-all">View All</Link>
                            </div>
                        </li>

                        <li className="menu-item">
                            <Link to="/kitchen-tips" className="menu-button">Kitchen Tips</Link>
                            <div className="submenu">
                                <Link to="/kitchen-tips/instant-pot">Instant Pot</Link>
                                <Link to="/kitchen-tips/air-fryer">Air Fryer</Link>
                                <Link to="/kitchen-tips/slow-cooker">Slow Cooker</Link>
                                <Link to="/kitchen-tips/grilling">BBQ & Grilling</Link>
                                <Link to="/kitchen-tips/cooking-equipment">Cooking by Equipment</Link>
                                <Link to="/kitchen-tips/substitutions">Ingredient Substitutions</Link>
                                <Link to="/kitchen-tips" className="view-all">View All</Link>
                            </div>
                        </li>

                        <li className="menu-item">
                            <Link to="/news" className="menu-button">News</Link>
                            <div className="submenu">
                                <Link to="/news/celebrity">Celebrity & Entertainment</Link>
                                <Link to="/news/fast-food">Fast Food</Link>
                                <Link to="/news/grocery">Grocery</Link>
                                <Link to="/news/recalls">Recalls</Link>
                                <Link to="/news/trends">Trends</Link>
                                <Link to="/news" className="view-all">View All</Link>
                            </div>
                        </li>

                        <li className="menu-item">
                            <Link to="/features" className="menu-button">Features</Link>
                            <div className="submenu">
                                <Link to="/features/dinner-fix">Dinner Fix</Link>
                                <Link to="/features/sweet-spot">Sweet Spot</Link>
                                <Link to="/features/in-the-kitchen">In the Kitchen</Link>
                                <Link to="/features" className="view-all">View All</Link>
                            </div>
                        </li>

                        <li className="menu-item">
                            <Link to="/about" className="menu-button">About Us</Link>
                            <div className="submenu">
                                <Link to="/about">About JamesThew</Link>
                                <Link to="/allstars">Allstars</Link>
                                <Link to="/add-recipe">How to Add a Recipe</Link>
                            </div>
                        </li>

                        {/* Remove this entire block for Services */}
                        {/* 
                        <li className="menu-item">
                            <Link to="/services">Services</Link>
                            <div className="submenu">
                                <Link to="/services/config">Configuration</Link>
                            </div>
                        </li>
                        */}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar; 
