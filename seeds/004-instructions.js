
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          recipe_id: 1,
          step_number: 1,
          instructions: 'Spread peanut butter on one slice of bread.'
        },
        {
          recipe_id: 1,
          step_number: 2,
          instructions: 'Spread jelly on the other slice of bread.'
        },
        {
          recipe_id: 1,
          step_number: 3,
          instructions: 'Place jelly side and peanut butter side together.'
        },
        {
          recipe_id: 2,
          step_number: 1,
          instructions: 'Put cheese slices between bread slices.'
        },
        {
          recipe_id: 2,
          step_number: 2,
          instructions: 'Spread butter on the outside of the sandwich.'
        },
        {
          recipe_id: 2,
          step_number: 3,
          instructions: 'Fry sandwich over medium heat until golden brown.'
        },
      ]);
    });
};
