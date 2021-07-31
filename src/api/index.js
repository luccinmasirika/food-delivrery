import { API } from '../config';
import { isAuthenticated } from './auth';
const { token } = isAuthenticated();
const axios = require('axios').create({
  baseURL: `${API}/api`,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export const onCreateData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const onUpdateData = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const onGetData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};
