const Todo = ({ todo, handleDelete, handleCheckboxChange }) => {
  const done = todo.done ? 'done' : 'not done'
  return (
    <div>
      <button onClick={() => handleDelete(todo.id)}>x</button>
      {todo.task}, {done}
      <input type='checkbox' onChange={() => handleCheckboxChange(todo)} />
    </div>
  )
}

export default Todo
