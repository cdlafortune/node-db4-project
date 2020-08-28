db = require('./config');

module.exports = {
    getRecipes,
    setShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
};

function getShoppingList(id){
    return db('recipeDetails')
        .where('recipe_id', id);
};

function getInstructions(id){
    return db('instructions')
        .where('recipe_id', id);
};