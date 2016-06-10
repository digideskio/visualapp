function up(knex, Promise)
{
    return knex.schema.createTable('page', function (table) {
        table.increments();
        table.integer('user_id').unsigned().references('user.id').notNullable();
        table.string('title').index().notNullable();
        table.text('contents').notNullable();
        table.timestamps();
    });
}

function down(knex, Promise)
{
    return knex.schema.dropTable('page');
}

exports.up = up;
exports.down = down;
