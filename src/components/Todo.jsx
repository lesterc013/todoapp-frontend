import { useState } from 'react'

const Todo = ({ todo, handleDelete, handleTodoUpdate }) => {
  // Initial value of todoTaskUpdate should be todo.task?
  const [todoTaskUpdate, setTodoTaskUpdate] = useState(todo.task)
  // const [todoDoneUpdate, setTodoDoneUpdate] = useState(todo.done)
  // const done = todo.done ? 'done' : 'not done'

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
    <div>
      {/* <input type='checkbox' onChange={() => handleCheckboxChange(todo)} /> */}
      <button onClick={submitTodoDoneUpdate}>✓</button>
      <input
        type='text'
        name='todoInDb'
        value={todoTaskUpdate}
        onChange={({ target }) => setTodoTaskUpdate(target.value)}
        onKeyDown={blurInputOnEnterOrEscape}
        onBlur={submitTodoTaskUpdate}
      />
      <button onClick={() => handleDelete(todo.id)}>x</button>
    </div>
  )
}

export default Todo
