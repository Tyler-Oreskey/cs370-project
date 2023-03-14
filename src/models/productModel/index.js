const { database } = require('../../config');
const knex = require('knex')(database);
const tablename = 'products';

module.exports = {
    getByUPCCode: (upcCode) => {
        const res = knex
            .select('*')
            .from(tablename)
            .where('upc_code', upcCode);

        return res;
    },

    create: (name, upcCode) => {
        const res = knex
            .returning('id')
            .insert({ name, upc_code: upcCode })
            .into(tablename);

        return res;
    }
}