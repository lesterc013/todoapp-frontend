import { useState, useEffect } from 'react'
import todoServices from '../services/todoServices'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import axios from 'axios'

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

  const handleCheckboxChange = async (todoObject) => {
    const update = {
      task: todoObject.task,
      done: !todoObject.done,
    }
    const updatedTodo = await todoServices.updateTodo(todoObject.id, update)
    setTodos(await todoServices.getTodos())
  }

  // Conditional Render -- todos has nothing, just render the TodoForm; else map todos and TodoForm

  if (!todos) {
    return (
      <div>
        <h1>TODOs</h1>
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
        <h1>TODOs</h1>
        {todos.map((eachTodo) => (
          <Todo
            todo={eachTodo}
            handleDelete={handleDelete}
            handleCheckboxChange={handleCheckboxChange}
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
