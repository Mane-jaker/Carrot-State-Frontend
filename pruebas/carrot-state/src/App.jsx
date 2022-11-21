import { useState } from 'react'
import './App.css'
import { useSelector} from "react-redux"

function App() {
  const taskState = useSelector(state => state.tasks)
  console.log(taskState)

  return (
    <div className="App">
      
    </div>
  )
}

export default App
