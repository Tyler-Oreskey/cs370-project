const productRoute = require('./productRoute');

exports.appRoute = (router) => {
    router.use('/product', productRoute);
    return router;
}