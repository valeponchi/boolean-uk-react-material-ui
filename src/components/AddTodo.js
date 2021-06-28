import { useState } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {
  Button,
  TextField,
} from '@material-ui/core'

function AddTodo(props) {
  const [todoInput, setTodoInput] = useState('')

  const handleChange = e => setTodoInput(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    props.addTodo(todoInput)
    setTodoInput('')
  }

  return (
    <section>
      <h2 className="title">ADD ITEM</h2>
      <form className="add-item" onSubmit={handleSubmit}>
      <TextField
      className="add-input"
          label="Add a to-do.."
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          required
          minLength="3"
          onChange={handleChange}
          value={todoInput}
          name="text"
          size="small"
        />
      {/* <Button  className="add-btn" type="submit" variant="contained" color="primary">Add</Button> */}
      <Fab color="primary" aria-label="add" size="small" type="submit">
  <AddIcon />
</Fab>
      </form>
    </section>
  )
}

export default AddTodo
