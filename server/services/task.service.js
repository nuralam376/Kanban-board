const Task = require('../models/Task.model');

module.exports.find = () => Task.find({}).populate('category');

module.exports.create = (task) => Task.create(task);

module.exports.update = (task) =>
    Task.findByIdAndUpdate(task.task_id, { category: task.category_id }, { new: true }).populate(
        // eslint-disable-next-line prettier/prettier
        'category',
    );

module.exports.getTasksByCategory = (categoryId) =>
    Task.find({ category: categoryId }).sort({ _id: -1 });
