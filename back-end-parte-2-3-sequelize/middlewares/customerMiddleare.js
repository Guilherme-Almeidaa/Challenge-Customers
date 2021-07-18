const statusCodeMessages = require('../utilities/listStatusMessages');

const checkFieldsIsEmpty = (fields) => {
    let result = true;
    /* verifica se algum campo esta vazio
       se estiver retorna o nome do campo caso contrario retorna true
    */
    Object.entries(fields).forEach((item) => {
        if (item[1] === '') {
            result = [item[0]];
        }
    });
    return result;
};

const checkFieldsIsEmptyMiddleware = (req, res, next) => {
    const field = checkFieldsIsEmpty(req.body);
    const fieldConvert = field.toString()
    if (field !== true) {
        res.status(statusCodeMessages.badRequest);
        return res.json({
            error: {
                message: `the "${fieldConvert}" field cannot be empty`,
            },
        });
    }
    return next();
};

module.exports = {
    checkFieldsIsEmptyMiddleware,
}