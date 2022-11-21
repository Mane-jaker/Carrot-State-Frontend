
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
