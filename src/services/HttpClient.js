import axios from 'axios';

class HttpClient {
  constructor(baseURL) {
    this.client = axios.create({ baseURL });
  }

  get = (path, config) => this.client.get(path, config);

  post = (path, data, config) => this.client.post(path, data, config);

  delete = (path, config) => this.client.delete(path, config);

  patch = (path, data, config) => this.client.patch(path, data, config);
}

export default HttpClient;
