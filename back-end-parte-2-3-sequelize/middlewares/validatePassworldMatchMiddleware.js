const bcrypt = require('bcrypt');
const statusCodeMessages = require('../utilities/listStatusMessages');
const userService = require('../services/usersService');

const matchPasswolrd = async (req, res, next) => {
    const { email, password } = req.body;
    const result = await userService.userLogin(email);
    if (!result) {
        res.status(statusCodeMessages.badRequest);
        return res.json({
            error: {
                message: 'Email não esta cadastrado'
            }
        });
    }

    if (!bcrypt.compareSync(password, result.password)) {
        return res.status(statusCodeMessages.badRequest).json({
            error: {
                message: 'Senha incorreta'
            }
        })
    }


    return next();
}

module.exports = matchPasswolrd;