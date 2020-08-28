
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeDetails').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeDetails').insert([
        {
          recipe_id: 1, 
          ingredient_id: 1, 
          quantity: 2, 
          unit: 'slices'
        },
        {
          recipe_id: 1, 
          ingredient_id: 2, 
          quantity: 2, 
          unit: 'tablespoons'
        },
        {
          recipe_id: 1, 
          ingredient_id: 3, 
          quantity: 2, 
          unit: 'tablespoons'
        },
        {
          recipe_id: 2, 
          ingredient_id: 1, 
          quantity: 2, 
          unit: 'slices'
        },
        {
          recipe_id: 2, 
          ingredient_id: 4, 
          quantity: 2, 
          unit: 'slices'
        },
        {
          recipe_id: 2, 
          ingredient_id: 5, 
          quantity: 1, 
          unit: 'tablespoon'
        },
      ]);
    });
};
