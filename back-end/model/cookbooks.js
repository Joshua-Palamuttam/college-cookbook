const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
    name: String,
    measurement: Number,
    unitOfMeasurement: String
});

const directionsSchema = new mongoose.Schema({
    step: String
});

// const utensilSchema = new mongooseSchema({
//     name: String
// });

const suggestionsSchema = new mongoose.Schema({
    suggestion: String,
    rating: Number
});

const recipeSchema = new mongoose.Schema({
    name: String,
    typeOfMeal: String,
    imageURL: String,
    prepTime: Number,
    cookTime: Number,
    servingSize: Number,
    cost: Number,
    ingredients: [ingredientsSchema],
    directions: [directionsSchema],
    // cookingUtensils: [utensilSchema],
    suggestions: [suggestionsSchema]
});

const groceryListSchema = new mongoose.Schema({
    name: String,
    ingredients: [ingredientsSchema]
});

const userSchema = new mongoose.Schema({
    profileImage: String,
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    email: String,
    bio: String,
    favoriteRecipes: [recipeSchema],
    lists: [groceryListSchema]
    // friends: [userSchema]
});

module.exports = mongoose.model('Recipe', recipeSchema);
module.exports = mongoose.model('User', userSchema);
