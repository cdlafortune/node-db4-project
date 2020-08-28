
exports.up = async function(knex) {
    await knex.schema.table('recipeDetails', table => {
        table.text('unit');
    });
};

exports.down = async function(knex) {
    await knex.schema.table('recipeDetails', t => {
        t.dropColumn('unit')
    });
};
