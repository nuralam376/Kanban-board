const categoriesRouter = require('./categories');
const tasksRouter = require('./tasks');

module.exports = (app) => {
    app.use('/api/categories', categoriesRouter);
    app.use('/api/tasks', tasksRouter);
};
