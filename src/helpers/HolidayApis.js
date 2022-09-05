import axios from 'axios';

const base = axios.create({ baseURL: 'http://localhost:5000' });

export const getAllCalendarsApi = async (skip, limit) => {
  try {
    const res = await base.get(`/holidays/get-all-calendar/${skip}/${limit}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
