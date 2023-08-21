import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080';

class Api {
  static async request(endpoint, data = {}, method = 'get') {
    // console.debug('API Call:', endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${this.token}` };
    const params = method === 'get' ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  //   Api route methods

  //   Register user

  static async register(userData) {
    const user = await this.request(`/users`, userData, 'post');

    return user;
  }

  //   Get specific user by id

  static async getUser(id) {
    const user = await this.request(`/users/${id}`);
    return user;
  }

  //   Get all users
  static async getUsers() {
    const users = await this.request(`/users`);
    return users;
  }

  // Delete user

  static async delete(id) {
    const user = await this.request(`/users/${id}`, {}, 'delete');
    return user;
  }

  //   Update user

  static async update(userData, id) {
    const user = await this.request(`/users/${id}`, userData, 'put');
    return user;
  }
}

export default Api;
