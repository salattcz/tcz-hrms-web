import axios from 'axios';

const base = axios.create({ baseURL: 'http://localhost:5000' });

export const addBulkUsers = async (formData) => {
  const res = await base.post('/user/add-users', formData);
  return res;
};
