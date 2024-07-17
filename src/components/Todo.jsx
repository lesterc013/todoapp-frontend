const Todo = ({ todo }) => {
  const done = todo.done ? 'done' : 'not done'
  return (
    <div>
      {todo.task}, {done}
    </div>
  )
}

export default Todo
