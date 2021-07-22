import axios from 'axios';

const url = 'http://localhost:3001'

export const requestAllCustomers = async (token) => {
    const options = {
        method: 'GET',
        url: `${url}/customers`,
        headers: {
            Authorization: token
        },
    };

    return axios.request(options).then(response => {
        return response.data
    })
}

export const requestCustomerById = async (id, token) => {
    const options = {
        method: 'GET',
        url: `${url}/customers/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },

    }

    return axios.request(options).then(response => {
        return response.data
    })
}

export const requestGetAllVehicles = async (token) => {
    const options = {
        method: 'GET',
        url: `${url}/vehicles`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
    };

    return axios.request(options).then(response => {
        return response.data
    })
}

export const requestCreateCustomer = async (customer, token) => {
    const options = {
        method: 'POST',
        url: `${url}/customers/register`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        data: customer,
    }

    return axios.request(options).then(response => {
        return response.data
    })
}

export const requestUpdateCustomer = async (customer, id, token) => {
    const options = {
        method: 'PUT',
        url: `${url}/customers/update/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        data: customer,
    }

    return axios.request(options).then(response => {
        return response.data
    })
}

export const requestFindByName = async (name, token) => {
    const options = {
        method: 'GET',
        url: `${url}/customers/search`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        params: { name: name },
    }

    return axios.request(options).then((response) => {
        return response.data
    })
}

export const requestDeleteCustomer = async (id, token) => {
    const options = {
        method: 'DELETE',
        url: `${url}/customers/delete/${id}`,
        headers: {
            Authorization: token
        },
    }

    return axios.request(options).then(response => {
        return response.data
    })
}