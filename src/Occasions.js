import React from 'react';
import './Occasions.css';

const occasionsData = [
  {
    title: "Valentine's Day",
    description: "Celebrate love with these romantic recipes.",
    recipes: [
      { id: 1, name: "Chocolate Fondue", image: "/images/chocolate-fondue.jpg", description: "A delicious chocolate dip for fruits." },
      { id: 2, name: "Heart-Shaped Pizza", image: "/images/heart-pizza.jpg", description: "A fun pizza shaped like a heart." },
      { id: 3, name: "Strawberry Shortcake", image: "/images/strawberry-shortcake.jpg", description: "A classic dessert with fresh strawberries." },
    ],
  },
  {
    title: "Thanksgiving",
    description: "Gather around the table with these traditional dishes.",
    recipes: [
      { id: 4, name: "Roast Turkey", image: "/images/roast-turkey.jpg", description: "The centerpiece of any Thanksgiving feast." },
      { id: 5, name: "Pumpkin Pie", image: "/images/pumpkin-pie.jpg", description: "A sweet and spiced pumpkin dessert." },
      { id: 6, name: "Stuffing", image: "/images/stuffing.jpg", description: "Savory stuffing to complement your turkey." },
    ],
  },
  {
    title: "Christmas",
    description: "Enjoy festive recipes for the holiday season.",
    recipes: [
      { id: 7, name: "Gingerbread Cookies", image: "/images/gingerbread-cookies.jpg", description: "Spiced cookies perfect for decorating." },
      { id: 8, name: "Eggnog", image: "/images/eggnog.jpg", description: "A creamy holiday drink with nutmeg." },
      { id: 9, name: "Christmas Ham", image: "/images/christmas-ham.jpg", description: "A glazed ham that's a holiday favorite." },
    ],
  },
  {
    title: "Halloween",
    description: "Spook up your celebrations with these fun recipes.",
    recipes: [
      { id: 10, name: "Pumpkin Soup", image: "/images/pumpkin-soup.jpg", description: "A warm and comforting soup." },
      { id: 11, name: "Ghostly Cupcakes", image: "/images/ghost-cupcakes.jpg", description: "Cupcakes decorated to look like ghosts." },
      { id: 12, name: "Witch's Brew Punch", image: "/images/witchs-brew.jpg", description: "A fun and spooky drink for Halloween." },
    ],
  },
  // Add more occasions as needed
];

const Occasions = () => {
  return (
    <div className="occasions-container">
      <h1>Special Occasions Recipes</h1>
      <p>Explore our collection of recipes perfect for holidays and celebrations.</p>
      {occasionsData.map((occasion, index) => (
        <div key={index} className="occasion-section">
          <h2>{occasion.title}</h2>
          <p>{occasion.description}</p>
          <div className="occasion-recipes">
            {occasion.recipes.map(recipe => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.name} />
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
                <a href={`/recipe/${recipe.id}`} className="view-recipe-link">View Recipe</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Occasions; 