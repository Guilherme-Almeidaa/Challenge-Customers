const validateEmailRegex = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/.test(email);
const statusCodeMessages = require('../utilities/listStatusMessages');

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
}

module.exports = {
    validateEmailAndPassaword,
}