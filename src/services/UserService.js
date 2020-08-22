class UserService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  signUp = (name, password) => this.httpClient.post('/auth/signup', { name, password });

  signIn = async (name, password) => {
    const { data } = await this.httpClient.post('/auth/signin', { name, password });
    this.httpClient.setAccessToken(data.accessToken);
  }

  getUser = () => this.httpClient.get('/user/me', { requireAuth: true });
}

export default UserService;
