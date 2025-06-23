import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/Auth/Login'
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard'
import { AdminDashboard } from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext)
  // console.log(authData.employees);

  const handleLogin = (email, password) => {
    if(email == "admin@me.com" && password == 123){
      setUser('admin')
      console.log(user);
    }else if(authData && authData.employees.find((e)=>email == e.email && password == e.password)){
      setUser('user')
      console.log(user);
    }else{
      alert("Invalid credentials");
    }
  }

  

  return (
    <>
    {!user? <Login handleLogin={handleLogin}/>:''}
    {user == 'user'? <EmployeeDashboard/>: ''}
    {user == 'admin'? <AdminDashboard/> : ''}
    </>
  )
}

export default App
