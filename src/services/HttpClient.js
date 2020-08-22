import axios from 'axios';

export const ACCESS_TOKEN_KEY = 'AUTH_TOKEN';

class HttpClient {
  client = null;

  accessToken = null;

  constructor(baseURL) {
    this.client = axios.create({ baseURL });
    this.accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    this.client.interceptors.request.use((config) => {
      if (!config.requireAuth) return config;

      const configCopy = { ...config };
      configCopy.headers.Authorization = `Bearer ${this.accessToken}`;

      return configCopy;
    });
  }

  get = (path, config) => this.client.get(path, config);

  post = (path, data, config) => this.client.post(path, data, config);

  delete = (path, config) => this.client.delete(path, config);

  patch = (path, data, config) => this.client.patch(path, data, config);

  setAccessToken = (token) => {
    this.accessToken = token;
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }
}

export default HttpClient;
