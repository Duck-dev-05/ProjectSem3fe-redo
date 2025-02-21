import React from 'react';

const CategoryList = () => {
  const categories = [
    { id: 1, name: 'Dinners' },
    { id: 2, name: 'Meals' },
    { id: 3, name: 'Ingredients' },
    { id: 4, name: 'Occasions' },
    { id: 5, name: 'Cuisines' },
  ];

  return (
    <div className="category-section">
      <h2>Recipe Categories</h2>
      <ul className="category-list">
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList; 