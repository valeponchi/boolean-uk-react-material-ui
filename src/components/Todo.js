import { Grid, SvgIcon } from "@material-ui/core";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { IconButton } from '@material-ui/core';

function Todo(props) {
  return (
    <li className="todo">
      <div className="completed-section">
        <input
          className="completed-checkbox"
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.toggleTodoCompletion(props.todo)}
        />
      </div>
      <div className="text-section">
        <p className={`text ${props.todo.completed ? 'completed' : ''}`}>
          {props.todo.text}
        </p>
      </div>
      <div className="button-section">
        {/* <button className="delete" onClick={() => props.removeTodo(props.todo)}> */}
        {/* <SvgIcon {...props}>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </SvgIcon> */}
    {/* <Grid item xs={8}>
        <DeleteRoundedIcon htmlColor="blue"/>
      </Grid> */}
    <DeleteRoundedIcon className="delete" htmlColor="blue" onClick={() => props.removeTodo(props.todo)} />
          {/* 🗑 */}
          
        {/* </button> */}
      </div>
    </li>
  )
}

export default Todo
