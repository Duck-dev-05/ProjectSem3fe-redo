import React from 'react';
import './CelebrityNews.css'; // Optional: Create a CSS file for styling

const CelebrityNews = () => {
    return (
        <div className="celebrity-news-container">
            <h1>Celebrity News</h1>
            <p>Stay updated with the latest celebrity news and trends in the food world!</p>

            <section className="trending-news">
                <h2>Trending Celebrity News</h2>
                <ul>
                    <li>Dolly Parton's Fans Are Saying '1000% Trust Dolly' on Her Newest Grocery Line</li>
                    <li>Matthew McConaughey's 3-Ingredient Cocktail Tastes Like Spring Break in a Glass</li>
                    <li>Jennifer Garner Calls This Ina Garten Recipe One of Her 'All-Time Favorites'</li>
                    <li>Stanley Tucci's 'Genius' Sandwich Is the Easy, No-Brainer Recipe You Need</li>
                </ul>
            </section>

            <section className="celebrity-recipes">
                <h2>Celebrity Recipes</h2>
                <ul>
                    <li><strong>Matthew McConaughey's Wings:</strong> A family favorite for game days!</li>
                    <li><strong>Ina Garten's Favorite Olive Oil:</strong> The secret to her delicious dishes.</li>
                    <li><strong>Dolly Parton's Comfort Food:</strong> A dish she loves to celebrate her birthday.</li>
                </ul>
            </section>

            <section className="cooking-tips">
                <h2>Cooking Tips from Celebrities</h2>
                <ul>
                    <li>Gordon Ramsay's 1-Ingredient Recipe Is So Brilliant, You'll Want to Try It!</li>
                    <li>Giada De Laurentiis' 3-Ingredient Dip Is My New Favorite Party Trick.</li>
                    <li>Emeril Lagasse's Burger Recipe Has the Easiest Secret Ingredient.</li>
                </ul>
            </section>
        </div>
    );
};

export default CelebrityNews; 