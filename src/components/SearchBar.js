import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaHistory, FaFire, FaArrowRight } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    const popularCategories = [
        {
            text: 'Quick Dinner Ideas',
            icon: '🍽️',
            suggestions: [
                'One-Pan Chicken and Vegetables',
                '15-Minute Pasta Recipes',
                'Quick Stir-Fry Dishes',
                'Easy Sheet Pan Dinners',
                'Fast Family Meals'
            ]
        },
        {
            text: 'Healthy Recipes',
            icon: '🥗',
            suggestions: [
                'Low-Carb Meal Ideas',
                'High-Protein Recipes',
                'Mediterranean Diet',
                'Whole30 Recipes',
                'Clean Eating Meals'
            ]
        },
        {
            text: 'Breakfast & Brunch',
            icon: '🍳',
            suggestions: [
                'Fluffy Pancake Recipes',
                'Healthy Smoothie Bowls',
                'Egg Breakfast Ideas',
                'Weekend Brunch Menu',
                'Quick Breakfast Options'
            ]
        },
        {
            text: 'Air Fryer Recipes',
            icon: '♨️',
            suggestions: [
                'Crispy Chicken Wings',
                'Air Fryer Vegetables',
                'Healthy Air Fryer Snacks',
                'Air Fried Fish Recipes',
                'Air Fryer Desserts'
            ]
        },
        {
            text: 'Baking & Desserts',
            icon: '🍰',
            suggestions: [
                'Easy Cookie Recipes',
                'Homemade Bread Ideas',
                'Classic Cake Recipes',
                'Pie & Pastry Tips',
                'Quick Sweet Treats'
            ]
        }
    ];

    const recentSearches = [
        'Chocolate Cake Recipe',
        'Easy Weeknight Dinners',
        'Healthy Lunch Ideas',
        'One-Pot Meals'
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            handleSearch(query);
        }
    };

    const handleSearch = (searchTerm) => {
        setQuery(searchTerm);
        navigate(`/search/${encodeURIComponent(searchTerm)}`);
        setShowSuggestions(false);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (searchTerm) => {
        handleSearch(searchTerm);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleBackToCategories = () => {
        setSelectedCategory(null);
    };

    return (
        <div className="search-container" ref={searchRef}>
            <form onSubmit={handleSubmit} className="search-form">
                <div className="search-input-wrapper">
                    <FaSearch className="search-icon" />
                    <input
                        type="search"
                        value={query}
                        onChange={handleInputChange}
                        onFocus={() => setShowSuggestions(true)}
                        placeholder="Search recipes, ingredients, and cooking tips..."
                        className="search-input"
                    />
                </div>
            </form>
            
            {showSuggestions && (
                <div className="search-suggestions">
                    {query && (
                        <div className="quick-search">
                            <button 
                                className="suggestion-item"
                                onClick={() => handleSuggestionClick(query)}
                            >
                                <FaSearch className="suggestion-icon" />
                                <span>Search for "{query}"</span>
                            </button>
                        </div>
                    )}

                    <div className="suggestion-section">
                        <h3>
                            <FaFire className="section-icon trending" />
                            Popular Categories
                        </h3>
                        {selectedCategory ? (
                            <div className="category-detail">
                                <button className="back-button" onClick={handleBackToCategories}>
                                    ← Back to Categories
                                </button>
                                <div className="category-header">
                                    <span className="category-icon">{selectedCategory.icon}</span>
                                    <h4>{selectedCategory.text}</h4>
                                </div>
                                <div className="category-suggestions">
                                    {selectedCategory.suggestions.map((suggestion, index) => (
                                        <button
                                            key={index}
                                            className="suggestion-item"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            <FaArrowRight className="suggestion-icon" />
                                            <span>{suggestion}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="popular-searches">
                                {popularCategories.map((category, index) => (
                                    <button
                                        key={index}
                                        className="popular-search-item"
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        <span className="search-emoji">{category.icon}</span>
                                        {category.text}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="suggestion-section">
                        <h3>
                            <FaHistory className="section-icon" />
                            Recent Searches
                        </h3>
                        <div className="recent-searches">
                            {recentSearches.map((search, index) => (
                                <button
                                    key={index}
                                    className="suggestion-item"
                                    onClick={() => handleSuggestionClick(search)}
                                >
                                    <FaHistory className="suggestion-icon" />
                                    <span>{search}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar; 