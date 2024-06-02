import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createtodo } from './components/Createtodo'
import { Todos } from './components/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <Createtodo></Createtodo>
       
       <Todos></Todos>
        
      </div>
     
  )
}

export default App
//creatodo some html kind of thing for creating a todo
//todos for rendering the todo