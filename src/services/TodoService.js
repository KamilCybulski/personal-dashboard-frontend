const sleep = (t) => new Promise((res) => setTimeout(res, t));

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
    const { data } = await this.httpClient.patch(`/todo/status/${id}`, { status }, { requireAuth: true });
    return data;
  }

  updatePosition = async (id, newPosition) => {
    await sleep(2000);
    if (id === 52) {
      throw new Error('Dupa dupa dupa');
    }
    const { data } = await this.httpClient.patch(
      `/todo/position/${id}`,
      { newPosition },
      { requireAuth: true },
    );
    return data;
  }

  deleteTodo = (id) => this.httpClient.delete(`/todo/${id}`, { requireAuth: true });
}

export default TodoService;
