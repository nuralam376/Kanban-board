const Category = require('../models/Category.model');

module.exports.find = () => Category.find({});

module.exports.create = (category) => Category.create(category);

module.exports.findToDoCategory = () => Category.findOne({ name: 'To Do' });
