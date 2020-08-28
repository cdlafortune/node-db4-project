
exports.up = async function(knex) {
    await knex.schema.createTable('instructions', table => {
        table.increments('id');
        table.integer('recipe_id').notNull();
        table.integer('step_number').notNull();
        table.text('instructions').notNull();
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('instructions');
};
