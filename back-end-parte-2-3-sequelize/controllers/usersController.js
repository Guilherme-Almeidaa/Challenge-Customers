const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('../services/usersService');
const statusCodeMessages = require('../utilities/listStatusMessages');

const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const salt = bcrypt.genSaltSync(5);
        const passwordEncrypted = bcrypt.hashSync(password, salt);
        const result = await userService.createUser({
            email,
            password: passwordEncrypted
        });
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

const userLogin = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await userService.userLogin(email);
        const userInfo = { data: { user: result.email, id: result.id } };
        const token = jwt.sign(userInfo, statusCodeMessages.SECRET, jwtConfig);
        res.status(statusCodeMessages.success)
        return res.json({
            token
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
}


module.exports = {
    createUser,
    findById,
    userLogin,
}