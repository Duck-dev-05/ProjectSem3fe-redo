import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
    const sections = [
        {
            title: "About JamesThew",
            content: "JamesThew is a food community that brings people together through their shared love of cooking. Our platform offers a vast collection of recipes, cooking tips, and culinary inspiration to help you create delicious meals at home.",
            image: "/images/about/about-main.jpg"
        },
        {
            title: "Our Mission",
            content: "We believe that cooking should be accessible, enjoyable, and bring people together. Our mission is to help home cooks of all levels discover and share the joy of cooking.",
            features: [
                "Share authentic recipes from around the world",
                "Build a supportive cooking community",
                "Make cooking accessible to everyone",
                "Inspire culinary creativity"
            ]
        },
        {
            title: "Get In Touch",
            content: "Have questions or suggestions? We'd love to hear from you. Share your recipes, connect with our team, or get support for your culinary journey.",
            buttons: [
                {
                    text: "Share Your Recipe",
                    link: "/add-recipe",
                    primary: true
                },
                {
                    text: "Contact Us",
                    link: "/contact",
                    primary: false
                }
            ]
        }
    ];

    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About JamesThew</h1>
                <p>Bringing people together through the joy of cooking</p>
            </header>

            <section className="about-main">
                <div className="about-image">
                    <img src={sections[0].image} alt="JamesThew Community" />
                </div>
                <div className="about-content">
                    <h2>{sections[0].title}</h2>
                    <p>{sections[0].content}</p>
                </div>
            </section>

            <section className="mission-section">
                <h2>{sections[1].title}</h2>
                <p>{sections[1].content}</p>
                <div className="mission-features">
                    {sections[1].features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="join-section">
                <h2>{sections[2].title}</h2>
                <p>{sections[2].content}</p>
                <div className="join-buttons">
                    {sections[2].buttons.map((button, index) => (
                        <Link 
                            key={index}
                            to={button.link}
                            className={`join-button ${button.primary ? 'primary' : 'secondary'}`}
                        >
                            {button.text}
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs; 