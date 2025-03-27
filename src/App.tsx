import { Route, Routes } from 'react-router-dom'
import './App.css'
import Authlayout from './components/auth/authlayout/Authlayout'
import Register from './components/auth/register/Register'
import Login from './components/auth/login/Login'
import Home from './components/pages/home/Home'
import SpecificPage from './components/pages/specificpage/SpecificPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/specificpage/:id' element={<SpecificPage/>}/>
      <Route path={"/auth"} element={<Authlayout/>}>
        <Route  path="login" element={<Login/>} />
        <Route  path="register" element={<Register/>} />
      </Route>
    </Routes>
  )
}

export default App
