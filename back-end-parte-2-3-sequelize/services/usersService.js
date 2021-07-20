const { User } = require('../models');

const createUser = async (user) => {
    const result = await User.create(user)
    return {
        id: result.id,
        email: result.email
    };
}

const findById = async (id) => {
    const result = User.findByPk(id);
    return result;
}

const userLogin = async (email) => {
    const result = await User.findOne({
        where: {
            email
        }
    })
    return result;
}

module.exports = {
    createUser,
    findById,
    userLogin,
}