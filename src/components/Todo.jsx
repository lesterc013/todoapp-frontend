const Todo = ({ todo, handleDelete }) => {
  const done = todo.done ? 'done' : 'not done'
  return (
    <div>
      {todo.task}, {done}
      <button onClick={() => handleDelete(todo.id)}>x</button>
    </div>
  )
}

export default Todo
