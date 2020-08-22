import axios from 'axios';

class HttpClient {
  client = null;

  accessToken = null;

  constructor(baseURL) {
    this.client = axios.create({ baseURL });

    this.client.interceptors.request.use((config) => {
      console.log('Request config: ', config);
      return config;
    });
  }

  get = (path, config) => this.client.get(path, config);

  post = (path, data, config) => this.client.post(path, data, config);

  delete = (path, config) => this.client.delete(path, config);

  patch = (path, data, config) => this.client.patch(path, data, config);

  setAccessToken = (token) => {
    this.accessToken = token;
  }
}

export default HttpClient;
