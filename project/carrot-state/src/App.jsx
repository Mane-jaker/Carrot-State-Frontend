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
  
  return (
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
  )
}

export default App
