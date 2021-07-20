const { User } = require('../models');

const createUser = async (user) => {
    const result = await User.create(user)
    return result;
}

const findById = async (id) => {
    const result = User.findByPk(id);
    return result;
}

module.exports = {
    createUser,
    findById,
}