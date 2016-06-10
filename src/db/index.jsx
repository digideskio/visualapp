import knex from 'knex';
import knexfile from '../../knexfile';

var connection = knex(knexfile.development);

export default connection;
