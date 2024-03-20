import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Createtodo from './components/CreateTodo'
import Todos from './components/Todo'
// import './App.css'

function App() {
  
  const [todos , setTodo] = useState([])

  fetch("http://localhost:8000/todos")
  .then(async (res)=>{
    const json = await res.json();
    setTodo(json.todos)
  })





  return (
    <>
      <h1>TO-DO</h1>
      <Createtodo></Createtodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
