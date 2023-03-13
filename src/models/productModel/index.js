const { database } = require('../../config');
const knex = require('knex')(database);
const tablename = 'products';

module.exports = {
    getByUPCCode: (upc_code) => {
        const result = knex
            .select('*')
            .from(tablename)
            .where('upc_code', upc_code);

        return result;
    },

    create: (name, upc_code) => {
        const result = knex
            .returning('id')
            .insert({ name: name, upc_code: upc_code })
            .into(tablename);

        return result;
    }
}