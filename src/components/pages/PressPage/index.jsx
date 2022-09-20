import React,{useState} from 'react'
import Login from '../LoginPage'

function PressPage() {
    const [users, setUsers] = useState(true)
  return (
    <>
     {users && <Login/>}
    
    </>
  )
}

export default PressPage