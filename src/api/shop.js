import { API } from '../config';
const axios = require('axios').create({
  baseURL: API,
});

export const userData = (data) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(data));
  }
};

export const createCategory = async (userId, token, data) => {
  try {
    const response = await axios.post(
      `${API}/api/category/create/${userId}`,
      data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const getCategories = async (userId, token, page) => {
  try {
    const response = await axios.get(
      `${API}/api/categories/${userId}?page=${page}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const getUsers = async (userId, token) => {
  try {
    const response = await axios.get(`${API}/api/user/all/${userId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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

export const searchProducts = async (userId, token, page, name, data) => {
  try {
    const response = await axios.post(
      `${API}/api/products/search/${userId}?page=${page}&&name=${name}`,
      data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const getUserStats = async (userId, token, data) => {
  try {
    const response = await axios.get(
      `${API}/api/user/stats/${userId}?userId=${data}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const updateUser = async (userId, token, data) => {
  try {
    const response = await axios.put(`${API}/api/user/${userId}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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

export const createUser = async (token, data) => {
  try {
    const response = await axios.post(`${API}/api/signup`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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

export const removeUser = async (userId, token) => {
  try {
    const response = await axios.put(`${API}/api/user/${userId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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

export const getUser = async (userId, token) => {
  try {
    const response = await axios.get(`${API}/api/user/${userId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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

export const getLogo = async (userId, token) => {
  try {
    const response = await axios.get(`${API}/api/logo/read`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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

export const updateLogo = async (userId, token, data) => {
  try {
    const response = await axios.put(`${API}/api/logo/update/${userId}`, data, {
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

export const getSalesStats = async (userId, token) => {
  try {
    const response = await axios.get(`${API}/api/sales/stats/${userId}`, {
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
