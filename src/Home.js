import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredRecipes = [
    {
      id: 1,
      title: "Million Dollar Potato Casserole",
      image: "/images/potato-casserole.jpg",
      category: "Our 17 Cheesiest Casseroles of All Time"
    },
    {
      id: 2,
      title: "Warm Broccoli Caesar Salad",
      image: "/images/broccoli-salad.jpg",
      category: "The Aldi Find So Good It Feels Like It Should Be Illegal"
    },
    {
      id: 3,
      title: "2-Ingredient Pasta Dinner",
      image: "/images/pasta-dinner.jpg",
      category: "This 2-Ingredient Pasta Dinner Never Gets Old"
    }
  ];

  const chickenRecipes = [
    {
      id: 1,
      title: "Pulled Chicken Sloppy Joes",
      ratings: 38,
      image: "/images/sloppy-joes.jpg"
    },
    {
      id: 2,
      title: "Air Fryer Buttermilk Fried Chicken",
      ratings: 18,
      image: "/images/fried-chicken.jpg"
    },
    {
      id: 3,
      title: "Indian Chicken Curry (Murgh Kari)",
      ratings: 1267,
      image: "/images/chicken-curry.jpg"
    }
  ];

  const testimonials = [
    {
      id: 1,
      recipe: "Fluffy French Toast",
      comment: "Perfect and delicious!!! Why dine out? Save the money and make this at home! My boyfriend says this is 'fantastic.'",
      author: "Cynthia Ross",
      location: "Nevada",
      joined: "Joined 2010"
    },
    {
      id: 2,
      recipe: "Mini Lemon Meringue Pies",
      comment: "The lemon filling tasted great and just right. I [used] a bit more juice because I like a higher tartness level. I'll make these babies again!",
      author: "Jim Morehand",
      location: "New York",
      joined: "Joined 2016"
    }
  ];

  const worldCuisines = [
    {
      id: 1,
      title: "The Best Indian Street Food Snacks",
      image: "/images/indian-street-food.jpg"
    },
    {
      id: 2,
      title: "Irresistible Mexican Street Foods",
      image: "/images/mexican-street-food.jpg"
    },
    {
      id: 3,
      title: "The Best Japanese Street Food Snacks",
      image: "/images/japanese-street-food.jpg"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>America's #1 Trusted Recipe Resource since 1997</h1>
        <div className="hero-stats">
          <div className="stat">
            <h2>113K</h2>
            <p>Original Recipes</p>
          </div>
          <div className="stat">
            <h2>6.9M+</h2>
            <p>Ratings & Reviews</p>
          </div>
          <div className="stat">
            <h2>60M</h2>
            <p>Home Cooks</p>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="featured-section">
        <h2>The Latest</h2>
        <div className="recipe-grid">
          {featuredRecipes.map(recipe => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.category}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Winner Chicken Dinners */}
      <section className="chicken-section">
        <h2>Winner, Winner, Chicken Dinners</h2>
        <div className="recipe-grid">
          {chickenRecipes.map(recipe => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.ratings} Ratings</p>
            </Link>
          ))}
        </div>
      </section>

      {/* World Cuisines */}
      <section className="world-cuisines-section">
        <h2>Spotlight on World Cuisines</h2>
        <div className="cuisine-grid">
          {worldCuisines.map(cuisine => (
            <div key={cuisine.id} className="cuisine-card">
              <img src={cuisine.image} alt={cuisine.title} />
              <h3>{cuisine.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Home Cook Heroes */}
      <section className="testimonials-section">
        <h2>Home of the Home Cook</h2>
        <p className="section-desc">We know our community (that's you!) is the key ingredient that sets us apart.</p>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <h3>{testimonial.recipe}</h3>
              <p className="testimonial-text">"{testimonial.comment}"</p>
              <div className="testimonial-author">
                <p>{testimonial.author}, {testimonial.location}</p>
                <p className="joined-date">{testimonial.joined}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Searches */}
      <section className="popular-searches">
        <h2>Popular Searches</h2>
        <div className="search-tags">
          <Link to="/search/chicken">Chicken</Link>
          <Link to="/search/smoothies">Smoothies</Link>
          <Link to="/search/banana-bread">Banana Bread</Link>
          <Link to="/search/lasagna">Lasagna</Link>
          <Link to="/search/pancakes">Pancakes</Link>
          <Link to="/search/meatloaf">Meatloaf</Link>
          <Link to="/search/cookies">Cookies</Link>
          <Link to="/search/chili">Chili</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 