import axios from 'axios';

const BASE_URL = " http://localhost:8080/api/v1";


export const create = async (resourceName, jsonData) => {
    return axios.post(`${BASE_URL}/${resourceName}`, jsonData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const createWithExtraResource = async (resourceName, id, lastResource, jsonData) => {
    return axios.post(`${BASE_URL}/${resourceName}/${id}/${lastResource}`, jsonData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
export const find = async (resourceName) => {
    return axios.get(`${BASE_URL}/${resourceName}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const findById = async (resourceName, id) => {
    return axios.get(`${BASE_URL}/${resourceName}/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const findByIdWithExtraResource = async (resourceName, id, lastResource) => {
    return axios.get(`${BASE_URL}/${resourceName}/${id}/${lastResource}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const updateById = async (resourceName, jsonData, id) => {
    return axios.put(`${BASE_URL}/${resourceName}/${id}`, jsonData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const deleteById = async (resourceName, id) => {
    return axios.delete(`${BASE_URL}/${resourceName}/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}