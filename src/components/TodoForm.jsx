const TodoForm = ({ handleTodoCreation, inputValue, setNewTodo }) => {
  return (
    <form onSubmit={handleTodoCreation}>
      <button type='submit' name='add'>
        +
      </button>
      <input
        type='text'
        name='todo'
        value={inputValue}
        onChange={({ target }) => setNewTodo(target.value)}
      />
    </form>
  )
}

export default TodoForm
