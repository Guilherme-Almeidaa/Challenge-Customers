import jwt from 'jsonwebtoken';


export const isAuthenticated = (token) => {
    const dateNow = new Date();
    if (jwt.decode(token) && token) {
        return jwt.decode(token).exp > dateNow / 1000
    } else {
        return false;
    }
}



