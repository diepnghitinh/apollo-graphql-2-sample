import { get } from 'axios';
const host = process.env.SIMULATOR_API_HOST;

export default {
  async findAll() {
    try {
      const { data } = await get(`${host}/author/findall`);
      return data;
    } catch (error) {
      throw error;
    }
  },

  async findOne(id) {
    try {
      const { data } = await get(`${host}/author/findone/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
};
