import { useState } from 'react'
import AgentSesion from './template/AgentSesion'
import Home from './template/Home'
import ManagerSesion from './template/ManagerSesion'
import AgentPage from './template/AgentPage'
import { useSelector } from 'react-redux'

function App() {

   const itemsState = useSelector(state => state.items)
   console.log(itemsState)

 return(
  <>
     <AgentSesion />
  </>
 )
}

export default App
