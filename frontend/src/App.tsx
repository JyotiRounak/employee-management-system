import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { EmployeeFrom } from './component/employee/EmployeeFrom'
import EmployeeList from './component/employee/EmployeeList'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<EmployeeList />} />
      <Route path='/employee' element={<EmployeeFrom />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
