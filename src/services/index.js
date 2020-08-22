/* eslint-disable import/prefer-default-export */

import HttpClient from './HttpClient';
import UserService from './UserService';

const httpClient = new HttpClient('http://localhost:3000');

export const userService = new UserService(httpClient);
