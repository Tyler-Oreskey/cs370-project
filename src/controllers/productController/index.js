const { productModel } = require('../../models');

module.exports = {
    getByUPCCode: async (req, res, next) => {
        try {
            const result = await productModel.getByUPCCode(req.params.upc_code);
            
            if (result.length === 0) {
                return res.status(404).json("No data");
            }

            return res.status(200).json(result);
        }
        catch(error) {
            next(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const { name, upc_code } = req.body;

            // check if product already exists.
            const duplicate = await productModel.getByUPCCode(upc_code);

            if (duplicate.length > 0) {
                return res.status(409).json("Duplicate record");
            }

            const result = await productModel.create(name, upc_code);

            if (result.length === 0) {
                return res.status(404).json("No data");
            }

            return res.status(200).json(result);
        }
        catch(error) {
            next(error);
        }
    }
}