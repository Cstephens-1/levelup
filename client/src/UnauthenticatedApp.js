import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Routes>
      <Route path="/" element={ <Login setCurrentUser={setCurrentUser} />}></Route>
      <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>}></Route>
      {/* <Route path="*" replace /> */}
    </Routes>
  )
}

export default UnauthenticatedApp
