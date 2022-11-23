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
import ItemRegister from './pages/ItemRegister'
import InmobiliariaPage from './pages/InmobiliariaPage'


function App() {
  //localhost:5173/login/agent
  // const {loginType} = useParams();
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<ErrorPage/>}/> 
            <Route path='/' element={<Home/>}/>
            <Route path='/login'>
              <Route path=':loginType' element={<Login/>} />  
            </Route> 
            <Route path='/register' element={<Register/>}/>
            <Route path='/agentPage'>
              <Route path=':idAgent' element={<AgentPage/>} /> 
            </Route>
            <Route path='/item' element={<ItemPage/>}/>
            <Route path='/clients' element={<ClientsPage/>}/>
            <Route path='/uploadImg' element={<UploadImg/>}/>
            <Route path='/popIt' element={<PopupItem/>}/>
            <Route path='/registItem'>
              <Route path=':idAgent' element={<ItemRegister/>}></Route> 
            </Route>
            <Route path='/InmobiliPage' element={<InmobiliariaPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
