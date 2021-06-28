import Todo from './Todo'

function CompletedTodos(props) {
  return props.showCompletedTodos ? (
    <section className="completed-list-section">
      <h2 className="title">COMPLETED</h2>
      <ul className="completed-list">
        {props.completedTodos.map(todo => (
          <Todo
            key={todo.text}
            todo={todo}
            toggleTodoCompletion={props.toggleTodoCompletion}
            removeTodo={props.removeTodo}
          />
        ))}
      </ul>
    </section>
  ) : null
}

export default CompletedTodos
