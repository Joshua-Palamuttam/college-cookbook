(function () {
    "use strict";

    // CONSTANTS
    
    // OTHER VARS

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

    window.onload = setup;
})();
