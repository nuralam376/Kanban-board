const categoryService = require('../services/category.service');

module.exports.getAll = async (req, res) => {
    try {
        const categories = await categoryService.find();
        return res.status(200).json(categories);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: `${err.message}` });
    }
};
module.exports.create = async (req, res) => {
    try {
        const category = await categoryService.create(req.body);
        return res.status(200).json(category);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: `${err.message}` });
    }
};
