import client from './client';

export const authenticateUser = async (name: string, password:string) => {
  try {
    const response = await client.post(`/auth/login`, { name, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || 'An error occurred during login');
  }
};

export const createUser = async (name: string, password:string) => {
  try {
    const response = await client.put(`/auth/signup`, { name, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || 'An error occurred during signup');
  }
};