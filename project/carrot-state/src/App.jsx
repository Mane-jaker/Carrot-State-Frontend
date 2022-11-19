import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AgentPage from './pages/AgentPage'
import ClientsPage from './pages/ClientsPage'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import ItemPage from './pages/ItemPage'
import Login from './pages/Login'
import Register from './pages/Register'
import UploadImg from './pages/UploadImg'

import PopupItem from './components/PopupItem'


function App() {
  
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<ErrorPage/>}/> 
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/register' element={<Register/>}/>
            <Route path='/agentPage' element={<AgentPage/>}/>
            <Route path='/item' element={<ItemPage/>}/>
            <Route path='/clients' element={<ClientsPage/>}/>
            <Route path='/uploadImg' element={<UploadImg/>}/>
            <Route path='/popIt' element={<PopupItem/>}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
