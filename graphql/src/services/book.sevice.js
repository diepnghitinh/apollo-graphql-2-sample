import { get, post } from 'axios';

const host = process.env.SIMULATOR_API_HOST;

export default {
  async findAll() {
    try {
      const { data } = await get(`${host}/book/findall`);
      return data;
    } catch (error) {
      throw error;
    }
  },

  async findMany(ids) {
    try {
      const { data } = await post(`${host}/book/findMany`);
      return data;
    } catch (error) {
      throw error;
    }
  },

  async findOne(id) {
    try {
      const { data } = await get(`${host}/book/findone/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
};
