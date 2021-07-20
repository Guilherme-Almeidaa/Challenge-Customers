import axios from 'axios';

const url = 'http://localhost:3001';

export const userRegister = async (user) => {
    const options = {
        method: 'POST',
        url: `${url}/users/register`,
        headers: { 'Content-Type': 'application/json' },
        data: user,
    }

    return axios.request(options).then(response => {
        return response.data
    })
}

export const userLogin = async (user) => {
    const options = {
        method: 'POST',
        url: `${url}/users/login`,
        headers: { 'Content-Type': 'application/json' },
        data: user,
    }

    return axios.request(options).then(response => {
        return response.data
    })
}