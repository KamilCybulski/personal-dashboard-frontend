class UserService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  signUp = (name, password) => this.httpClient.post('/auth/signup', { name, password });

  signIn = async (name, password) => {
    const { accessToken } = await this.httpClient.post('/auth/signin', { name, password });
    return accessToken;
  }
}

export default UserService;
