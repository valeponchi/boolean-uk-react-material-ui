import Todo from './Todo'

function IncompleteTodos(props) {
  return (
    <section className="todo-list-section">
      <h2 className="title">TODO</h2>
      <ul className="todo-list">
        {props.incompleteTodos.map(todo => (
          <Todo
            key={todo.text}
            todo={todo}
            toggleTodoCompletion={props.toggleTodoCompletion}
            removeTodo={props.removeTodo}
          />
        ))}
      </ul>
    </section>
  )
}

export default IncompleteTodos
