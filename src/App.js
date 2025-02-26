import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from './context/AuthContext';
// Import Instant Pot component
import InstantPot from './pages/kitchen-tips/InstantPot';
// Import Air Fryer component
import AirFryer from './pages/kitchen-tips/AirFryer';
// Import Slow Cooker component
import SlowCooker from './pages/kitchen-tips/SlowCooker';
// Import Grilling component
import Grilling from './pages/kitchen-tips/Grilling';
// Import Ingredient Substitutions component
import IngredientSubstitutions from './pages/meals/categories/IngredientSubstitutions';
import CookingEquipment from './pages/kitchen-tips/CookingEquipment';
import CookingBasics from './pages/kitchen-tips/CookingBasics';


// Import pages
import Home from "./pages/Home";
import RecipeDetail from './pages/RecipeDetail';
import SearchResults from './pages/SearchResults';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Help from './pages/Help';
import News from './pages/News';
import Features from './pages/Features';
import KitchenTips from './pages/KitchenTips';
import AboutUs from './pages/AboutUs';
import AddRecipe from './pages/AddRecipe';
import PostDetail from './pages/PostDetail';
import Appetizers from './pages/meals/Appetizers';
import Dinners from './pages/Dinners';
import DinnerDetail from './pages/DinnerDetail';
import BreakfastBrunch from './pages/meals/BreakfastBrunch';
import Lunch from './pages/meals/Lunch';
import BreadBrunch from './pages/BreadBrunch';
import Brunch from './pages/meals/Brunch';
import LunchBrunch from './pages/meals/LunchBrunch';
import Ingredients from './pages/ingredients/Ingredients';
import Cuisines from './components/Cuisines';
import HealthyRecipes from './pages/meals/categories/HealthyRecipes';
import Salads from './pages/meals/Salads';
import Soups from './pages/meals/Soups';
import Magazine from './pages/Magazine';
import Featured from './pages/magazine/Featured';
import Categories from './pages/magazine/Categories';
import Latest from './pages/magazine/Latest';
import Popular from './pages/magazine/Popular';
import CategoryArticles from './pages/magazine/CategoryArticles';
import Subscribe from './pages/Subscribe';
import Newsletter from './pages/Newsletter';
import Sweepstakes from './pages/Sweepstakes';
import SweepstakeDetail from './pages/SweepstakeDetail';
import Winners from './pages/sweepstakes/Winners';
import SweepstakeRules from './pages/sweepstakes/SweepstakeRules';
import FiveIngredientDinners from './pages/posts/FiveIngredientDinners';
import OnePotMeals from './pages/posts/OnePotMeals';
import QuickEasyMeals from './pages/posts/QuickEasyMeals';
import FamilyDinners from './pages/posts/FamilyDinners';
import ThirtyMinuteMeals from './pages/posts/ThirtyMinuteMeals';
import SoupStewsChili from './pages/posts/SoupStewsChili';
import ComfortFood from './pages/posts/ComfortFood';
import MainDishes from './pages/posts/MainDishes';
import SheetPanDinners from './pages/posts/SheetPanDinners';
import AllDinnerTopics from './pages/posts/AllDinnerTopics';
import AppetizersPage from './pages/meals/AppetizersPage';
import DrinkBrunch from './pages/DrinkBrunch';
import Meals from './pages/meals/Meals';
import AllMeals from './pages/meals/AllMeals';
import DessertPage from './pages/meals/DessertPage';
import IngredientsPage from './pages/IngredientsPage';
import IngredientDetailPage from './pages/IngredientDetailPage';
import RecipeDetailPage from './pages/RecipeDetailPage';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/help" element={<Help />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />

            {/* Meals Routes */}
            <Route path="/meals/breakfast" element={<BreakfastBrunch />} />
            <Route path="/meals/brunch" element={<Brunch />} />
            <Route path="/meals/lunch" element={<Lunch />} />
            <Route path="/meals/healthy" element={<HealthyRecipes />} />
            <Route path="/meals/soups" element={<Soups />} />
            <Route path="/meals/salads" element={<Salads />} />
            <Route path="/meals/appetizers" element={<AppetizersPage />} />
            <Route path="/meals/bread" element={<BreadBrunch />} />
            <Route path="/meals/drink" element={<DrinkBrunch />} />
            <Route path="/dinners" element={<Dinners />} />
            <Route path="/dinners/:id" element={<DinnerDetail />} />

            {/* Magazine Routes */}
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/magazine/featured" element={<Featured />} />
            <Route path="/magazine/categories" element={<Categories />} />
            <Route path="/magazine/latest" element={<Latest />} />
            <Route path="/magazine/popular" element={<Popular />} />
            <Route path="/magazine/category/:categoryName" element={<CategoryArticles />} />

            {/* Other Routes */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/kitchen-tips" element={<KitchenTips />} />
            <Route path="/kitchen-tips/instant-pot" element={<InstantPot />} />
            <Route path="/kitchen-tips/air-fryer" element={<AirFryer />} />
            <Route path="/kitchen-tips/slow-cooker" element={<SlowCooker />} />
            <Route path="/kitchen-tips/grilling" element={<Grilling />} />
            <Route path="/kitchen-tips/equipment" element={<CookingEquipment />} />
            <Route path="/kitchen-tips/cooking-basics" element={<CookingBasics />} />
            <Route path="/kitchen-tips/ingredient-substitutions" element={<IngredientSubstitutions />} />
            <Route path="/news" element={<News />} />
            <Route path="/features" element={<Features />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/sweepstakes" element={<Sweepstakes />} />
            <Route path="/sweepstakes/:id" element={<SweepstakeDetail />} />
            <Route path="/sweepstakes/winners" element={<Winners />} />
            <Route path="/sweepstakes/rules" element={<SweepstakeRules />} />
            <Route path="/dinners/5-ingredient" element={<FiveIngredientDinners />} />
            <Route path="/dinners/one-pot" element={<OnePotMeals />} />
            <Route path="/dinners/quick-easy" element={<QuickEasyMeals />} />
            <Route path="/dinners/family" element={<FamilyDinners />} />
            <Route path="/dinners/thirty-minute" element={<ThirtyMinuteMeals />} />
            <Route path="/dinners/soups-stews" element={<SoupStewsChili />} />
            <Route path="/dinners/comfort-food" element={<ComfortFood />} />
            <Route path="/dinners/main-dishes" element={<MainDishes />} />
            <Route path="/dinners/sheet-pan" element={<SheetPanDinners />} />
            <Route path="/dinners/all-topics" element={<AllDinnerTopics />} />
            <Route path="/meals/all" element={<AllMeals />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/meals/dessert-page" element={<DessertPage />} />
            <Route path="/ingredients" element={<IngredientsPage />} />
            <Route path="/ingredients/:ingredient" element={<IngredientDetailPage />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
