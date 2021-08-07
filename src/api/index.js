import { API } from '../config';
const axios = require('axios').create({
  baseURL: `${API}/api`,
  timeout: 10000,
});

export const onCreateData = async (url, data, token) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const onUpdateData = async (url, data, token) => {
  try {
    const response = await axios.put(url, data, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const onGetData = async (url, token) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};
