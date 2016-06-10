function seed(knex, Promise)
{
    return Promise.join(
        // Deletes ALL existing entries
        knex('page').del(),
        knex('user').del(),

        // Inserts seed entries
        knex('user').insert({id: 1, email: 'vladimir.barbarosh@gmail.com', created_at: new Date(), updated_at: new Date()}),
        knex('user').insert({id: 2, email: 'second@mail.ru', created_at: new Date(), updated_at: new Date()})
    );
}

exports.seed = seed;
