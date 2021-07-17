const customerService = require('../services/customersService');

const getAll = async (_req, res) => {
    try {
        const result = await customerService.getAll();
        res.status(200);
        return res.json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
}

const findById = async (req, res) => {
    try {
        const result = await customerService.findById(req.params.id)
        res.status(200);
        return res.json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
}

const create = async (req, res) => {
    try {
        const result = await customerService.create(req.body);
        res.status(201);
        return res.json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = {
    getAll,
    findById,
    create,
}