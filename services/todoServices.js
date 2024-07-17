import axios from 'axios'
const baseUrl = '/api/todos'

const getTodos = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createTodo = async (newTodo) => {
  const response = await axios.post(baseUrl, newTodo)
  return response.data
}

const deleteTodo = async (todoId) => {
  const response = await axios.delete(`${baseUrl}/${todoId}`)
  return response.data
}

const updateTodo = async (todoId, update) => {
  const response = await axios.put(`${baseUrl}/${todoId}`, update)
  return response.data
}

export default {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
}
