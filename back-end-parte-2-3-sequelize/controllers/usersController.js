const userService = require('../services/usersService');
const statusCodeMessages = require('../utilities/listStatusMessages');

const createUser = async (req, res) => {
    try {
        const result = await userService.createUser(req.body);
        res.status(201);
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
        const result = await userService.findById(req.params.id);
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

module.exports = {
    createUser,
    findById
}