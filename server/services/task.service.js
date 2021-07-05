const Task = require('../models/Task.model');

module.exports.find = () => Task.find({}).populate('category');

module.exports.create = (task) => Task.create(task);
