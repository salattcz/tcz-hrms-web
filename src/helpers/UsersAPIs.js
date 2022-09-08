import axios from 'axios';

const base = axios.create({ baseURL: 'http://localhost:5000' });

export const addBulkUsers = async (formData) => {
  const res = await base.post('/user/add-users', formData);
  return res;
};

export const addSingleUserApi = async (userData) => {
  try {
    const res = await base.post('/user/add-single-user', userData);
    return res;
  } catch (error) {
    const res = error.response;
    return res;
  }
};

export const adminLoginApi = async (loginData) => {
  try {
    const res = await base.post('/user/admin-login', loginData);
    return res;
  } catch (error) {
    const res = error.response;
    return res;
  }
};

export const getAllUsersApi = async (skip, limit) => {
  try {
    const res = await base.get(`/user/get-all-users/${skip}/${limit}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getUserApi = async (employeeId) => {
  try {
    const res = await base.get(`/user/get-user/${employeeId}`);
    return res;
  } catch (error) {
    console.log(error);
    const res = error.response;
    return res;
  }
};
