/* eslint-disable no-underscore-dangle */
const TaskService = require('../services/task.service');
const CategoryService = require('../services/category.service');

module.exports.getAll = async (req, res) => {
    try {
        const tasks = await TaskService.find();
        return res.status(200).json(tasks);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};
module.exports.create = async (req, res) => {
    try {
        const todoCategory = await CategoryService.findToDoCategory();
        const newTask = {
            name: req.body.name,
            category: todoCategory._id,
        };
        const task = await TaskService.create(newTask);
        return res.status(200).json(task);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};
module.exports.update = async (req, res) => {
    try {
        const task = await TaskService.update(req.body);
        return res.status(200).json(task);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};
