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
import Prueba from './componentsRedux/Prueba'
import ContactInmobiliari from './pages/ContactInmobiliari'
import ContactPropiedades from './pages/Contactpropiedades'
import ContactVender from './pages/ContactVender'
import PropiedadesPage from './pages/PropiedadesPage'
import AgentClientsPage from './pages/AgentClientsPage'
import UserForm from './componentsRedux/UserForm'


function App() {
  //localhost:5173/login/agent
  // const {loginType} = useParams(); 
  return (
    //NOJAO ):(
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
            <Route path='/InmobiliPage' element={<InmobiliariaPage/>}>
            <Route path=':idAgent' element={<ItemRegister/>}></Route> 
            </Route>
            <Route path='/carloxd' element={<Prueba/>}/>
            <Route path='/carloxd/edit-user/:id' element={<UserForm/>}/>
            <Route path='/clients/inmobiliaria' element={<ContactInmobiliari/>}/>
            <Route path='/clients/propiedades' element={<ContactPropiedades/>}/>
            <Route path='/clients/vender' element={<ContactVender/>}/>
            <Route path='/InmobiliPage/propiedades' element={<PropiedadesPage/>}/>
            <Route path='/agentpage/client' element={<AgentClientsPage/>}/>
          </Routes>
/project/carrot-state/src/pages        </BrowserRouter>
      </>
  )
}

export default App
