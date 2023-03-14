const { productModel } = require('../../models');

module.exports = {
    getByUPCCode: async (req, res, next) => {
        try {
            const { upcCode } = req.params;

            const res = await productModel.getByUPCCode(upcCode);
            
            if (res.length === 0) {
                return res.status(404).json("No data.");
            }

            return res.status(200).json(res);
        }
        catch(err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const { name, upcCode } = req.body;

            if (!name || !upcCode) {
                return res.status(404).json("Missing required name and/or upc code.");
            }

            // check if product already exists.
            const dup = await productModel.getByUPCCode(upcCode);

            if (dup.length > 0) {
                return res.status(409).json("Duplicate record.");
            }

            const res = await productModel.create(name, upcCode);

            if (res.length === 0) {
                return res.status(404).json("No data.");
            }

            return res.status(200).json(res);
        }
        catch(err) {
            next(err);
        }
    }
}