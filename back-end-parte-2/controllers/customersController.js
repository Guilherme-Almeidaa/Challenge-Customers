const customerService = require('../services/customersService');
const statusCodeMessages = require('../utilities/listStatusMessages');

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
        const result = await customerService.findById(req.params.id);
        if (!result) {
            res.status(statusCodeMessages.UserNotFound.statusCode);
            return res.json(statusCodeMessages.UserNotFound.errorMessage);
        }
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
        const { vehiclesId } = req.body;
        const result = await customerService.create(req.body, vehiclesId);
        res.status(201);
        return res.json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
}

const update = async (req, res) => {
    try {
        const { vehiclesId } = req.body;
        const { id } = req.params;
        const result = await customerService.update(req.body, vehiclesId, id);
        if (!result) {
            res.status(statusCodeMessages.UserNotFound.statusCode);
            return res.json(statusCodeMessages.UserNotFound.errorMessage);
        }
        res.status(200);
        return res.json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
}

const findByName = async (req, res) => {
    try {
        const { name } = req.query;
        const result = await customerService.findByName(name);
        res.status(200);
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
    update,
    findByName,
}