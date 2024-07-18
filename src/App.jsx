import { useState, useEffect } from 'react'
import todoServices from '../services/todoServices'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import Container from 'react-bootstrap/Container'
import '../styles/appStyles.css'

function App() {
  const [todos, setTodos] = useState(null)
  const [newTodo, setNewTodo] = useState('')

  // Fetch all todos related to this sessionId from the db upon first render of the app
  // Note: sessionId SHOULD automatically get stuck as a Cookie
  useEffect(() => {
    const fetchTodos = async () => {
      const todosArr = await todoServices.getTodos()
      setTodos(todosArr)
    }
    fetchTodos()
  }, [])

  const handleTodoCreation = async (event) => {
    event.preventDefault()
    const todo = {
      task: newTodo,
    }
    await todoServices.createTodo(todo)
    // GET all the todos again from the new database, and setTodos
    setTodos(await todoServices.getTodos())
    setNewTodo('')
  }

  const handleDelete = async (todoId) => {
    await todoServices.deleteTodo(todoId)
    setTodos(await todoServices.getTodos())
  }

  const handleTodoUpdate = async (todoObject, update) => {
    const updatedTodo = await todoServices.updateTodo(todoObject.id, update)
    setTodos(await todoServices.getTodos())
  }

  // Conditional Render -- todos has nothing, just render the TodoForm; else map todos and TodoForm

  if (!todos) {
    return (
      <div>
        <Container className='titleContainer'>
          <h1>TODOs</h1>
        </Container>
        <TodoForm
          handleTodoCreation={handleTodoCreation}
          inputValue={newTodo}
          setNewTodo={setNewTodo}
        />
      </div>
    )
  } else {
    return (
      <div>
        <Container className='titleContainer'>
          <h1>TODOs</h1>
        </Container>
        {todos.map((eachTodo) => (
          <Todo
            todo={eachTodo}
            handleDelete={handleDelete}
            handleTodoUpdate={handleTodoUpdate}
            key={eachTodo.id}
          />
        ))}
        <TodoForm
          handleTodoCreation={handleTodoCreation}
          inputValue={newTodo}
          setNewTodo={setNewTodo}
        />
      </div>
    )
  }
}

export default App
