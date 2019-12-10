import axios from 'axios';

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const apiURL = 'http://localhost:3001/api';

export const getUsers = () => {
    return axios.get(`${apiURL}/users`)
        .then(response => response.data);
};

export const getUser = curUserId => {
    return axios.get(`${apiURL}/user/${curUserId}`)
        .then(response => response.data);
};

export const addUser = userData => {
    return axios.post(`${apiURL}/user`, userData)
        .then(response => response.data);
};

export const updateUser = userData => {
    return axios.put(`${apiURL}/user/${userData._id}`, userData)
        .then(response => response.data);
};

export const deleteUser = userId => {
    return axios.delete(`${apiURL}/user/${userId}`)
        .then(response => response.data);
};