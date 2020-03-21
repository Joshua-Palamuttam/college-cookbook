(function () {
    "use strict";

    // CONSTANTS
    let ingredientDiv;
    let addIngredientButton;
    let ingredientWrapperElement;
    let listOfIngredientsElement;
    let directionWrapperElement;
    let listOfDirectionsElement;
    let addDirectionButton;
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

        ingredientWrapperElement = document.getElementById("ingredientWrapper");
        listOfIngredientsElement = document.getElementById("listOfIngredients");
        addIngredientButton = document.getElementById("addIngredient");
        addIngredientButton.addEventListener('click', addIngredient, false);

        directionWrapperElement = document.getElementById("directionsWrapper");
        listOfDirectionsElement = document.getElementById("listOfDirections");
        addDirectionButton = document.getElementById("addDirection");
        addDirectionButton.addEventListener('click', addDirection, false);
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
    function addIngredient(e){
            const target = e.target;
            const ingredientsDiv = document.getElementById("ingredientsList");

            const ingredientName = $('#ingredientNameInput').val();
            const spanElement = document.createElement("li");
            const spanElementText = document.createTextNode(ingredientName);
            spanElement.appendChild(spanElementText);

            ingredientsDiv.appendChild(spanElement);

    }   
    
    function addDirection(e){
        const target = e.target;
        const directionDiv = document.getElementById("directionsList");

        const directionName = $('#directionsInput').val();
        const spanElement = document.createElement("li");
        const spanElementText = document.createTextNode(directionName);
        spanElement.appendChild(spanElementText);

        directionDiv.appendChild(spanElement);
} 

    window.onload = setup;
})();