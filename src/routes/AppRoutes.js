import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Appetizers from '../pages/Appetizers';
import Dinners from '../pages/Dinners';
import DinnerDetail from '../pages/DinnerDetail';
import Help from '../pages/Help';
import News from '../pages/News';
import Features from '../pages/Features';
import KitchenTips from '../pages/KitchenTips';
import AboutUs from '../pages/AboutUs';
import AddRecipe from '../pages/AddRecipe';
import PostDetail from '../pages/PostDetail';
// Import other pages as needed...

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appetizers" element={<Appetizers />} />
      <Route path="/dinners" element={<Dinners />} />
      <Route path="/dinners/:id" element={<DinnerDetail />} />
      <Route path="/help" element={<Help />} />
      <Route path="/news" element={<News />} />
      <Route path="/features" element={<Features />} />
      <Route path="/kitchen-tips" element={<KitchenTips />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/add-recipe" element={<AddRecipe />} />
      <Route path="/post/:id" element={<PostDetail />} />
      {/* Add other routes as needed... */}
    </Routes>
  );
};

export default AppRoutes; 