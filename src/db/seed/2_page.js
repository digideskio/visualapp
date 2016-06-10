function seed(knex, Promise)
{
    return Promise.join(
        // Deletes ALL existing entries
        knex('page').del()

        // Inserts seed entries
    );
}

exports.seed = seed;
