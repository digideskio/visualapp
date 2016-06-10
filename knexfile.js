module.exports = {

    development: {
        debug: true,
        client: 'mysql',
        connection: {
            database: 'visual',
            user: 'visual',
            password: 'visual'
        },
        migrations: {
            tableName: 'migration',
            directory: './src/db/migration'
        },
        seeds: {
            directory: './src/db/seed'
        }
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user:     'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user:     'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
