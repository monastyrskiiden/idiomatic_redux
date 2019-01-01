import { v4 } from 'node-uuid';

export const recieveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
});

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: v4(),
  text
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});
