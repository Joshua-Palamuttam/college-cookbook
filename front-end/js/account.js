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
        const recipeOfTheWeek = document.getElementById("recipeImage");
        recipeOfTheWeek.onclick = recipe;

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

    window.onload = setup;
})();



// // CONSTANTS

// const homeElement = document.getElementById("cookbookTitle");
// const findRecipesElement = document.getElementById("find");
// const addRecipesElement = document.getElementById("add");
// const favoriteRecipesElement = document.getElementById("favorite");
// const myGroceryListElement = document.getElementById("grocery");




// // (function () {
// // "use strict";

// //     // CONSTANTS

// //     // OTHER VARS

// //     function setup() {
// //         const homeElement = document.getElementById("cookbookTitle");
// homeElement('click', home);
// //         const findRecipesElement = document.getElementById("find");
//         findRecipesElement.onclick = findRecipe;
// //         const addRecipesElement = document.getElementById("add");
//         addRecipesElement.onclick = addRecipe;
// //         const favoriteRecipesElement = document.getElementById("favorite");
//         favoriteRecipesElement.onclick = favoriteRecipe;
// //         const myGroceryListElement = document.getElementById("grocery");
//         myGroceryListElement.onclick = groceryList;
// //     }

// function home() {
//     "use strict";
//     window.open("https://college-cookbook-2a5a7.firebaseapp.com/", '_self');
// }

// function findRecipe() {
//     "use strict";
//     window.open("https://college-cookbook-2a5a7.firebaseapp.com/html/find-recipe.html", '_self');
// }

// function addRecipe() {
//     "use strict";
//     window.open("https://college-cookbook-2a5a7.firebaseapp.com/html/add-recipe.html", '_self');
// }

// function favoriteRecipe() {
//     "use strict";
//     window.open("https://college-cookbook-2a5a7.firebaseapp.com/html/favorite-recipe.html", '_self');
// }
// function groceryList() {
//     "use strict";
//     window.open("https://college-cookbook-2a5a7.firebaseapp.com/html/grocery-list.html", '_self');
// }

// //     window.onload = setup;
// // })();
