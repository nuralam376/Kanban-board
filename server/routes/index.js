const categoriesRouter = require('./categories');

module.exports = (app) => app.use('/api/categories', categoriesRouter);
