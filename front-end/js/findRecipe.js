/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showDropdownMeal() {
  document.getElementById("myDropdown-meal").classList.toggle("show");
}

function showDropdownCost() {
  document.getElementById("myDropdown-cost").classList.toggle("show");
}

function showDropdownTime() {
  document.getElementById("myDropdown-time").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

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

(function () {



  "use strict";

  // CONSTANTS

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

