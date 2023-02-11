import './App.css';
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import AddUser from './components/AddUser'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {useState} from 'react'
import EditUser from './components/EditUser'

function App() {

let data = {
earningsMonthly: "3,00,000",
earningsAnnually: "48,00,000",
task:50,
pendingRequests: 50
}

let [users, setUsers] = useState([
  {
    name : 'Kalai',
    email : 'Kalai@gmail.com',
    batch : 'B1',
    mobile : 9876543210
  },
  {
  name : 'Selvan',
    email : 'Selvan@gmail.com',
    batch : 'B2',
    mobile : 9876598765
  },
  {
    name : 'Selvi',
    email : 'Selvi@gmail.com',
    batch : 'B2',
    mobile : 9876788967
  }
])


// const [value, setValue] = useState("hi")
  return <>
    <div id = "wrapper">

      <BrowserRouter>
        <Sidebar/>

        <Routes>
          <Route path = '/' element = {<Dashboard data = {{data,users,setUsers}}/>}/>
          <Route path = '/add-user' element = {<AddUser data = {{users, setUsers}}/>}/>
          <Route path = '/edit-user/:id' element = {<EditUser data = {{users, setUsers}}/>}/>
          <Route path = "*" element = {<Navigate to = '/add-user'/>}/>
        </Routes>

      </BrowserRouter>

   </div>
  
  </>
}

export default App;