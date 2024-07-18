import { useState, useEffect } from 'react'
import todoServices from '../services/todoServices'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import Container from 'react-bootstrap/Container'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import '../styles/styles.css'
import 'react-toastify/dist/ReactToastify.css'

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

  const showToastMessage = (error) => {
    toast.error(error.response.data.error, {
      position: 'top-right',
      autoClose: 3000,
      pauseOnHover: false,
      closeOnClick: true,
      closeButton: false,
      hideProgressBar: true,
      theme: 'colored',
      transition: Bounce,
    })
  }

  const handleTodoCreation = async (event) => {
    event.preventDefault()
    const todo = {
      task: newTodo,
    }
    try {
      await todoServices.createTodo(todo)
      // GET all the todos again from the new database, and setTodos
      setTodos(await todoServices.getTodos())
      setNewTodo('')
    } catch (error) {
      showToastMessage(error)
      setNewTodo('')
    }
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
            showToastMessage={showToastMessage}
            key={eachTodo.id}
          />
        ))}
        <TodoForm
          handleTodoCreation={handleTodoCreation}
          inputValue={newTodo}
          setNewTodo={setNewTodo}
        />
        <ToastContainer />
      </div>
    )
  }
}

export default App
