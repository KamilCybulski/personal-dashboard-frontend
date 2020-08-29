class TodoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  fetchAllTodos = async () => {
    const { data } = await this.httpClient.get('/todo', { requireAuth: true });
    return data;
  };
}

export default TodoService;
