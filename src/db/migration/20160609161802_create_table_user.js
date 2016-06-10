function up(knex, Promise)
{
    return knex.schema.createTable('user', function (table) {
        table.increments();
        table.string('email').unique().notNullable();
        table.specificType('password', 'CHAR(64)').notNullable();
        table.timestamps();
    });
}

function down(knex, Promise)
{
    return knex.schema.dropTable('user');
}

exports.up = up;
exports.down = down;
