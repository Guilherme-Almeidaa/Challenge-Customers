const update = 201;
const success = 200;
const notFound = 404;
const conflict = 409;
const badRequest = 400;
const internalError = 500;
const noContent = 204;
const not_autorized = 401;

const SECRET = 'ORatoRoeuOReiDeRoma';



const UserNotFound = {
  statusCode: notFound,
  errorMessage: {
    error: {
      message: 'user not found',
    },
  },
};

module.exports = {
  internalError,
  update,
  success,
  UserNotFound,
  noContent,
  badRequest,
  conflict,
  SECRET,
  not_autorized,
};
