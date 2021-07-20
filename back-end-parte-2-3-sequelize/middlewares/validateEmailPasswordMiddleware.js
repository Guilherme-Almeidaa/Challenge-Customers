const statusCodeMessages = require('../utilities/listStatusMessages');
const userService = require('../services/usersService');
const validateEmailRegex = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/.test(email);

const validateEmailAndPassaword = (req, res, next) => {
    const { email, password } = req.body;
    if (!validateEmailRegex(email)) {
        return res.status(statusCodeMessages.badRequest).json({
            error: {
                message: 'Email inválido',
            }
        });
    }
    if (password.length < 6) {
        return res.status(statusCodeMessages.badRequest).json({
            error: {
                message: 'A senha deve ter no mínimo 6 caracteres',
            }
        });
    }

    return next();
}

const checkEmailExists = async (req, res, next) => {
    const { email } = req.body;
    const check = await userService.userLogin(email);
    if (check) {
        return res.status(statusCodeMessages.badRequest).json({
            error: {
                message: 'Email ja cadastrado',
            }
        });
    }

    return next();
}

module.exports = {
    validateEmailAndPassaword,
    checkEmailExists,
}