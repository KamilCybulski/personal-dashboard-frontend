/* eslint-disable import/prefer-default-export */

import HttpClient, { ACCESS_TOKEN_KEY } from './HttpClient';
import UserService from './UserService';
import TodoService from './TodoService';

const httpClient = new HttpClient('http://localhost:3000');

export { ACCESS_TOKEN_KEY };

export const userService = new UserService(httpClient);
export const todoService = new TodoService(httpClient);
