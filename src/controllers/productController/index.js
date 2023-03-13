const { productModel } = require('../../models');

module.exports = {
    getByUPCCode: async (req, res, next) => {
        try {
            console.log(req.params);
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