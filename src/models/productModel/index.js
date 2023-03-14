const { database } = require('../../config');
const knex = require('knex')(database);
const tablename = 'products';

module.exports = {
    getByUPCCode: (upcCode) => {
        const result = knex
            .select('*')
            .from(tablename)
            .where('upc_code', upcCode);

        return result;
    },

    create: (name, upcCode) => {
        const result = knex
            .returning('id')
            .insert({ name, upc_code: upcCode })
            .into(tablename);

        return result;
    }
}