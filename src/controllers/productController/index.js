const { productModel } = require('../../models');

module.exports = {
    getByUPCCode: async (req, res, next) => {
        try {
            const { upcCode } = req.params;

            const result = await productModel.getByUPCCode(upcCode);
            
            if (result.length === 0) {
                return res.status(404).json("No data.");
            }

            return res.status(200).json(result);
        }
        catch(error) {
            next(error);
        }
    },

    create: async (req, res, next) => {
        try {
            let request;

            // to support both postman and python requests
            if (Object.keys(req.query).length > 0) {
                // express recognizes python get req. params as a "query" object in the req.
                request = req.query;
            }
            else {
                request = req.body;
            }

            if (!request.name || !request.upcCode) {
                return res.status(404).json("Missing required name and/or upc code.");
            }

            const { name, upcCode } = request;

            // check if product already exists.
            const duplicate = await productModel.getByUPCCode(upcCode);

            if (duplicate.length > 0) {
                return res.status(409).json("Duplicate record.");
            }

            const result = await productModel.create(name, upcCode);

            if (result.length === 0) {
                return res.status(404).json("No data.");
            }

            return res.status(200).json(result);
        }
        catch(error) {
            next(error);
        }
    }
}