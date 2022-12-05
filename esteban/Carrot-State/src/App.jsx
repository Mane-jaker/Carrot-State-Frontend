import { useState } from 'react'
import AgentSesion from './template/AgentSesion'
import Home from './template/Home'
import ManagerSesion from './template/ManagerSesion'
import { useSelector } from 'react-redux'
import ProspectiveBuyerPage from './template/ProspectiveBuyersPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemPage from './template/ItemPage'
import Login from './template/LogIn'
import Register from './template/Register'
import ClientsPage from './template/ClientsPage'
import UploadImg from './template/UploadImg'


function App() {

    const agentState = useSelector(state => state.agents)
    const houseState = useSelector(state => state.items)
    const plotState = useSelector(state => state.plots)
    const premiseState = useSelector(state => state.premises) 

    console.log(agentState)

 return(
  <>
      <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/register' element={<Register/>}/>
               <Route path='/agentSesion' element={<AgentSesion/>}/>
               <Route path='/itemPage' element={<ItemPage/>}/>
               <Route path='/manager' element={<ManagerSesion/>}/>
               <Route path='/prospectiveBuyer' element={ProspectiveBuyerPage}/> 
               <Route path='/ClientSesion' element={ClientsPage}/> 
               <Route path='/UploadImg' element={UploadImg}/> hola termine estas primeras rutas. atte esteban
            </Routes>
      </BrowserRouter>
  </>
 )
}

export default App
