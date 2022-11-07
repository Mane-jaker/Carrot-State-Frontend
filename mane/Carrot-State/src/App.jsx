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
import UploadImg from './template/UploadImg'

function App() {

  
   const itemsState = useSelector(state => state.items)
   console.log(itemsState)

 return(
  <>
      <BrowserRouter>
            <Routes>
               <Route path='/home' element={<Home/>}/>
               <Route path='/' element={<ItemPage/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/register' element={<Register/>}/>
               <Route path='/agentSesion' element={<AgentSesion/>}/>
               <Route path='/manager/' element={<ManagerSesion/>}/>
               
            </Routes>
      </BrowserRouter>
  </>
 )
}

export default App
