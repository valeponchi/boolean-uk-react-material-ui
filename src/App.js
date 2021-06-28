import { useState } from 'react'
import AddTodo from './components/AddTodo'
import CompletedTodos from './components/CompletedTodos'
import IncompleteTodos from './components/IncompleteTodos'
import Options from './components/Options'
import './styles.css'

const initialTodos = [
  {
    text: 'Go shopping',
    completed: false
  },
  {
    text: 'Work out',
    completed: false
  },
  {
    text: 'See the doctor',
    completed: true
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [showCompletedTodos, setShowCompletedTodos] = useState(true)

  const addTodo = text => {
    if (todos.some(todo => todo.text.toLowerCase() === text.toLowerCase())) {
      alert('That todo already exists!')
      return
    }
    setTodos([...todos, { text, completed: false }])
  }

  const toggleTodoCompletion = target => {
    const updatedTodos = todos.map(todo =>
      todo === target ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }

  const removeTodo = target => {
    setTodos(todos.filter(todo => todo !== target))
  }

  const incompleteTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <div className="App">
      <main>
        <Options
          showCompletedTodos={showCompletedTodos}
          setShowCompletedTodos={setShowCompletedTodos}
        />
        <AddTodo addTodo={addTodo} />
        <IncompleteTodos
          incompleteTodos={incompleteTodos}
          removeTodo={removeTodo}
          toggleTodoCompletion={toggleTodoCompletion}
        />
        <CompletedTodos
          completedTodos={completedTodos}
          removeTodo={removeTodo}
          toggleTodoCompletion={toggleTodoCompletion}
          showCompletedTodos={showCompletedTodos}
        />
      </main>
    </div>
  )
}

export default App
