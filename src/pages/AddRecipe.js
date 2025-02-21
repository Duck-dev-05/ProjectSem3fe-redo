import React, { useState } from 'react';
import './AddRecipe.css';

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        prepTime: '',
        cookTime: '',
        servings: '',
        difficulty: 'medium',
        ingredients: [''],
        instructions: [''],
        category: '',
        cuisine: '',
        image: null
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setRecipe(prev => ({
                ...prev,
                image: file
            }));
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...recipe.ingredients];
        newIngredients[index] = value;
        setRecipe(prev => ({
            ...prev,
            ingredients: newIngredients
        }));
    };

    const handleInstructionChange = (index, value) => {
        const newInstructions = [...recipe.instructions];
        newInstructions[index] = value;
        setRecipe(prev => ({
            ...prev,
            instructions: newInstructions
        }));
    };

    const addIngredient = () => {
        setRecipe(prev => ({
            ...prev,
            ingredients: [...prev.ingredients, '']
        }));
    };

    const addInstruction = () => {
        setRecipe(prev => ({
            ...prev,
            instructions: [...prev.instructions, '']
        }));
    };

    const removeIngredient = (index) => {
        const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
        setRecipe(prev => ({
            ...prev,
            ingredients: newIngredients
        }));
    };

    const removeInstruction = (index) => {
        const newInstructions = recipe.instructions.filter((_, i) => i !== index);
        setRecipe(prev => ({
            ...prev,
            instructions: newInstructions
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        console.log('Recipe submitted:', recipe);
    };

    return (
        <div className="add-recipe-container">
            <header className="add-recipe-header">
                <h1>Share Your Recipe</h1>
                <p>Share your culinary creations with our community</p>
            </header>

            <form onSubmit={handleSubmit} className="recipe-form">
                <div className="form-section">
                    <h2>Basic Information</h2>
                    
                    <div className="form-group">
                        <label htmlFor="title">Recipe Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={recipe.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={recipe.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="prepTime">Prep Time (minutes)</label>
                            <input
                                type="number"
                                id="prepTime"
                                name="prepTime"
                                value={recipe.prepTime}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cookTime">Cook Time (minutes)</label>
                            <input
                                type="number"
                                id="cookTime"
                                name="cookTime"
                                value={recipe.cookTime}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="servings">Servings</label>
                            <input
                                type="number"
                                id="servings"
                                name="servings"
                                value={recipe.servings}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <h2>Ingredients</h2>
                    {recipe.ingredients.map((ingredient, index) => (
                        <div key={index} className="form-group ingredient-group">
                            <input
                                type="text"
                                value={ingredient}
                                onChange={(e) => handleIngredientChange(index, e.target.value)}
                                placeholder="e.g., 2 cups flour"
                                required
                            />
                            {recipe.ingredients.length > 1 && (
                                <button 
                                    type="button" 
                                    className="remove-button"
                                    onClick={() => removeIngredient(index)}
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addIngredient} className="add-button">
                        + Add Ingredient
                    </button>
                </div>

                <div className="form-section">
                    <h2>Instructions</h2>
                    {recipe.instructions.map((instruction, index) => (
                        <div key={index} className="form-group instruction-group">
                            <textarea
                                value={instruction}
                                onChange={(e) => handleInstructionChange(index, e.target.value)}
                                placeholder={`Step ${index + 1}`}
                                required
                            />
                            {recipe.instructions.length > 1 && (
                                <button 
                                    type="button" 
                                    className="remove-button"
                                    onClick={() => removeInstruction(index)}
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addInstruction} className="add-button">
                        + Add Step
                    </button>
                </div>

                <div className="form-section">
                    <h2>Additional Details</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select
                                id="category"
                                name="category"
                                value={recipe.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="dessert">Dessert</option>
                                <option value="snack">Snack</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="cuisine">Cuisine</label>
                            <select
                                id="cuisine"
                                name="cuisine"
                                value={recipe.cuisine}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a cuisine</option>
                                <option value="italian">Italian</option>
                                <option value="mexican">Mexican</option>
                                <option value="chinese">Chinese</option>
                                <option value="indian">Indian</option>
                                <option value="american">American</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Recipe Image</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {imagePreview && (
                            <div className="image-preview">
                                <img src={imagePreview} alt="Recipe preview" />
                            </div>
                        )}
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-button">
                        Submit Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipe; 