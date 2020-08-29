class TodoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  fetchAllTodos = async () => {
    const { data } = await this.httpClient.get('/todo', { requireAuth: true });
    return data;
  };

  addTodo = async (name, notes) => {
    const { data } = await this.httpClient.post('/todo', { name, notes }, { requireAuth: true });
    return data;
  }

  updateStatus = async (id, status) => {
    const { data } = await this.httpClient.patch(`/todo/${id}`, { status }, { requireAuth: true });
    return data;
  }
}

export default TodoService;
