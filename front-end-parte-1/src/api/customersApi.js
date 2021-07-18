import axios from 'axios';

const url = 'http://localhost:3001'

export const requestAllCustomers = async () => {
    const options = {
        method: 'GET',
        url: `${url}/customers`
    };

    return axios.request(options).then(response => {
        return response.data
    })
}

export const requestCustomerById = async (id) => {
    const options = {
        method: 'GET',
        url: `${url}/customers/${id}`
    }

    return axios.request(options).then(response => {
        return response.data
    })
}

export const requestGetAllVehicles = async () => {
    const options = {
        method: 'GET',
        url: `${url}/vehicles`
    };

    return axios.request(options).then(response => {
        return response.data
    })
}

export const requestCreateCustomer = async (customer) => {
    const options = {
        method: 'POST',
        url: `${url}/customers/register`,
        headers: { 'Content-Type': 'application/json' },
        data: customer,
    }

    return axios.request(options).then(response => {
        return response.data
    })
}

export const requestUpdateCustomer = async (customer, id) => {
    const options = {
        method: 'PUT',
        url: `${url}/customers/update/${id}`,
        headers: { 'Content-Type': 'application/json' },
        data: customer,
    }

    return axios.request(options).then(response => {
        return response.data
    })
}

export const requestFindByName = async (name) => {
    const options = {
        method: 'GET',
        url: `${url}/customers/search`,
        params: { name: name },
    }

    return axios.request(options).then((response) => {
        return response.data
    })
}

export const requestDeleteCustomer = async (id) => {
    const options = {
        method: 'DELETE',
        url: `${url}/customers/delete/${id}`,
    }

    return axios.request(options).then(response => {
        return response.data
    })
}