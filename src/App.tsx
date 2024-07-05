import React from 'react'
// import Navbar from './components/Navbar'
// import Signup from './components/Signup'
// import Main from './components/Main'
import Login from './components/Login'
import {Routes,Route} from 'react-router-dom'
import Signup from './components/Signup'
import Main from './components/Main'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/' element={<Main/>}/>
    </Routes>
    {/* <Main/> */}
    <Login/>
    </>
  )
}

export default App