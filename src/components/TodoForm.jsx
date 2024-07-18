import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import '../../styles/todoFormStyles.css'

const TodoForm = ({ handleTodoCreation, inputValue, setNewTodo }) => {
  return (
    <form onSubmit={handleTodoCreation}>
      <Container className='formContainer'>
        <input
          className='formInput'
          type='text'
          name='todo'
          value={inputValue}
          onChange={({ target }) => setNewTodo(target.value)}
        />
        <Button className='addBtn' type='submit' name='add'>
          add
        </Button>
      </Container>
    </form>
  )
}

export default TodoForm
