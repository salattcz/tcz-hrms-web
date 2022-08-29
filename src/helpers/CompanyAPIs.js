import axios from 'axios';

const base = axios.create({ baseURL: 'http://localhost:5000' });

export const companyRegisterAPI = async (registerData) => {
  await base.post('/companies/register', registerData);
};
