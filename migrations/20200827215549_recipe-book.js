
exports.up = async function(knex) {
    await knex.schema.createTable('recipes', table => {
    table.increments('id');
    table.text('name').notNull().unique();
    });

    await knex.schema.createTable('ingredients', table => {
        table.increments('id');
        table.text('name').notNull().unique();
    });

    await knex.schema.createTable('recipeDetails', table => {
        table.increments('id');
        table.integer('recipe_id').notNull();
        table.integer('ingredient_id').notNull();
        table.float('quantity');
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipes');
    await knex.schema.dropTableIfExists('ingredients');
    await knex.schema.dropTableIfExists('recipeDetails');
};
