const jwt = require('jsonwebtoken');
const userService = require('../services/usersService');
const statusCodeMessages = require('../utilities/listStatusMessages');

const not_aurorizedMessage = {
    error: {
        message: 'missing auth token'
    },
}

const notLoggedMessage = {
    error: {
        message: 'not logged in'
    }
}

const auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization;
        if (!token) {
            res.status(statusCodeMessages.not_autorized)
            return res.json(not_aurorizedMessage)
        }
        const decoded = jwt.verify(token, statusCodeMessages.SECRET)
        const checkExistUser = await userService.findById(decoded.data.id)
        if (!checkExistUser) {
            res.status(statusCodeMessages.not_autorized);
            return res.json(notLoggedMessage);
        };

        const user = { user: decoded.data.email, id: decoded.data.id };
        req.user = user;
        return next();
    } catch (error) {
        console.error(error.message)
        res.status(codes.notProcess).json({
            error: {
                message: error.message
            }
        })
    }
}

module.exports = auth;