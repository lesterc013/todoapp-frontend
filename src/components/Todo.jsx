import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import '../../styles/styles.css'

const Todo = ({ todo, handleDelete, handleTodoUpdate, showToastMessage }) => {
  const [todoTaskUpdate, setTodoTaskUpdate] = useState(todo.task)

  const blurInputOnEnterOrEscape = (event) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.target.blur()
    }
  }

  const submitTodoTaskUpdate = async () => {
    const update = {
      task: todoTaskUpdate,
      done: todo.done,
    }
    try {
      await handleTodoUpdate(todo, update)
    } catch (error) {
      showToastMessage(error)
      setTodoTaskUpdate(todo.task)
    }
  }

  const submitTodoDoneUpdate = async () => {
    const update = {
      task: todoTaskUpdate,
      done: !todo.done,
    }
    await handleTodoUpdate(todo, update)
  }

  return (
    <Container className='todoContainer'>
      <Button className='updateBtn' onClick={submitTodoDoneUpdate}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='bi bi-check-lg'
          viewBox='0 0 16 16'
        >
          <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z' />
        </svg>
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
          autoComplete='off'
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
          autoComplete='off'
        />
      )}
      <Button className='delBtn' onClick={() => handleDelete(todo.id)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          fill='currentColor'
          className='bi bi-trash'
          viewBox='0 0 16 16'
        >
          <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z' />
          <path d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z' />
        </svg>
      </Button>
    </Container>
  )
}

export default Todo
