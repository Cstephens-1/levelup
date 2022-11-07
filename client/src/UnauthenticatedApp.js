import React from 'react'
import { Routes, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Routes>
      <Route path="/" element={ <Login setCurrentUser={setCurrentUser} />}>
       
      </Route>
      <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>}>
        
      </Route>
      {/* <Redirect to="/" /> */}
    </Routes>
  )
}

export default UnauthenticatedApp
