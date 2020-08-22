class UserService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  signUp = (name, password) => this.httpClient.post('/auth/signup', { name, password });
}

export default UserService;
