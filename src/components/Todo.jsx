import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import '../../styles/todoStyles.css'

const Todo = ({ todo, handleDelete, handleTodoUpdate }) => {
  const [todoTaskUpdate, setTodoTaskUpdate] = useState(todo.task)

  const blurInputOnEnterOrEscape = (event) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.target.blur()
    }
  }

  const submitTodoTaskUpdate = () => {
    const update = {
      task: todoTaskUpdate,
      done: todo.done,
    }
    handleTodoUpdate(todo, update)
  }

  const submitTodoDoneUpdate = () => {
    const update = {
      task: todoTaskUpdate,
      done: !todo.done,
    }
    handleTodoUpdate(todo, update)
  }

  return (
    <Container className='todoContainer'>
      <Button className='updateBtn' onClick={submitTodoDoneUpdate}>
        ✓
      </Button>
      {todo.done ? (
        <input
          className={`todoInput todoStrikethrough`}
          type='text'
          name='todoInDb'
          value={todoTaskUpdate}
          onChange={({ target }) => setTodoTaskUpdate(target.value)}
          onKeyDown={blurInputOnEnterOrEscape}
          onBlur={submitTodoTaskUpdate}
        />
      ) : (
        <input
          className={`todoInput`}
          type='text'
          name='todoInDb'
          value={todoTaskUpdate}
          onChange={({ target }) => setTodoTaskUpdate(target.value)}
          onKeyDown={blurInputOnEnterOrEscape}
          onBlur={submitTodoTaskUpdate}
        />
      )}
      <Button
        className='delBtn'
        size='sm'
        onClick={() => handleDelete(todo.id)}
      >
        del
      </Button>
    </Container>
  )
}

export default Todo
