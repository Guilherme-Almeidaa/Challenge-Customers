const vehiclesService = require('../services/vehiclesService');

const getAll = async (_req, res) => {
    try {
        const result = await vehiclesService.getAll();
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
    getAll
}