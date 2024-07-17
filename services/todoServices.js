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

export default {
  getTodos,
  createTodo,
}
