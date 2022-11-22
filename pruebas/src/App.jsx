import './App.css'
//import { useSelector} from "react-redux"
import Get  from './components/get'
import Back from './components/back'

function App() {
  //const taskState = useSelector(state => state.tasks)
  //console.log(taskState)

  return (
    <div className="App">
      <h1>Hello wolrd</h1>
      <Back/>
    </div>
  )
}

export default App