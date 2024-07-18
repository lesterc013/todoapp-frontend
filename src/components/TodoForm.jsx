import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import '../../styles/styles.css'

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
          autoComplete='off'
        />
        <Button className='addBtn' type='submit' name='add'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='currentColor'
            className='bi bi-plus-lg'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'
            />
          </svg>
        </Button>
      </Container>
    </form>
  )
}

export default TodoForm
