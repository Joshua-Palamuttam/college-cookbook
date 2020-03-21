(function () {
    "use strict";

    // CONSTANTS
    let FavoriteRecipeWrapperElement;
    let listOfFavoriteRecipes;
    let addFavoriteRecipeButton;
    // let listOfIngredientsElement;
    // OTHER VARS

    // called when the page first loads to create tiles and empty space 
    function setup() {
        const homeElement = document.getElementById("cookbookTitle");
        homeElement.onclick = home;
        const findRecipesElement = document.getElementById("find");
        findRecipesElement.onclick = findRecipe;
        const addRecipesElement = document.getElementById("add");
        addRecipesElement.onclick = addRecipe;
        const favoriteRecipesElement = document.getElementById("favorite");
        favoriteRecipesElement.onclick = favoriteRecipe;
        const myGroceryListElement = document.getElementById("grocery");
        myGroceryListElement.onclick = groceryList;
        FavoriteRecipeWrapperElement = document.getElementById("FavoriteRecipeWrapper");
        listOfFavoriteRecipes = document.getElementById("listOfFavoriteRecipes");
        addFavoriteRecipeButton = document.getElementById("addFavoriteRecipe");
        addFavoriteRecipeButton.addEventListener('click', addFavoriteRecipe, false);

    }

    function home() {
        window.open("https://college-cookbook-2a5a7.firebaseapp.com/", '_self');
    }

    function findRecipe() {
        window.open("https://college-cookbook-2a5a7.firebaseapp.com/html/find-recipe.html", '_self');
    }

    function addRecipe() {
        window.open("https://college-cookbook-2a5a7.firebaseapp.com/html/add-recipe.html", '_self');
    }

    function favoriteRecipe() {
        window.open("https://college-cookbook-2a5a7.firebaseapp.com/html/favorite-recipe.html", '_self');
    }     
    function groceryList() {
        window.open("https://college-cookbook-2a5a7.firebaseapp.com/html/grocery-list.html", '_self');
    }         
    function recipe() {
        window.open("https://college-cookbook-2a5a7.firebaseapp.com/html/recipe.html", '_self');
    }

    function addFavoriteRecipe(e){
        // addRecipe
        const target = e.target;
        const FavoriteRecipesDiv = document.getElementById("FavoriteRecipeList");
        const spanElement = document.createElement("li");
        const spanElementText = document.createTextNode(" Placeholder Recipe name");
        spanElement.appendChild(spanElementText);

        FavoriteRecipesDiv.appendChild(spanElement);
    }

    window.onload = setup;
})();