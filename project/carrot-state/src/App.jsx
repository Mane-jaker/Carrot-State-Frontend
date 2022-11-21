import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AgentPage from './pages/AgentPage'
import AgentSesion from './pages/AgentSesion'
import ClientsContentPage from './pages/ClientsContentPage'
import ClientsPage from './pages/ClientsPage'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import ItemPage from './pages/ItemPage'
import Login from './pages/Login'
import ManagerSesion from './pages/ManagerSesion'
import Register from './pages/Register'
import SalesPage from './pages/SalesPage'
import UploadImg from './pages/UploadImg'




function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
=======
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<ErrorPage/>}/> 
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/register' element={<Register/>}/>
            <Route path='/manager' element={<ManagerSesion/>}/>
            <Route path='/agentSesion' element={<AgentSesion/>}/>
            <Route path='/agentPage' element={<AgentPage/>}/>
            <Route path='/item' element={<ItemPage/>}/>
            <Route path='/clients' element={<ClientsPage/>}/>
            <Route path='/clientsContent' element={<ClientsContentPage/>}/>
            <Route path='/sales' element={<SalesPage/>}/>
            <Route path='/uploadImg' element={<UploadImg/>}/>
          </Routes>
        </BrowserRouter>
      </>
>>>>>>> parent of a5b9c9e (Caramba)
  )
}

export default App
