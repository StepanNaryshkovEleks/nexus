import axios from "axios";
import config from "./api-config";

export class ApiService {
  constructor() {
    this.requester = axios.create({
      baseURL: config.baseUrl,
      'Access-Control-Allow-Origin': '*',
    });
  }

  post = (path, data) => {
    return this.requester.post(path, data);
  };
}

export default new ApiService();
