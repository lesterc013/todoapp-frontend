import { useState, useEffect } from 'react'

function App() {
  const [newTodo, setNewTodo] = useState('')

  return (
    <div>
      <h1>TODOs</h1>
      <form>
        <button type='submit' name='add'>
          +
        </button>
        <input
          type='text'
          name='todo'
          value={newTodo}
          onChange={({ target }) => setNewTodo(target.value)}
        />
      </form>
    </div>
  )
}

export default App
