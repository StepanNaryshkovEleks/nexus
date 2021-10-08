import axios from 'axios';
import config from './api-config';

export class ApiService {
  constructor() {
    this.requester = axios.create({
      'baseURL': config.baseUrl,
    });
  }

  post = (path, data) => {
    // eslint-disable-next-line no-invalid-this
    return this.requester.post(path, data);
  };
}

export default new ApiService();
