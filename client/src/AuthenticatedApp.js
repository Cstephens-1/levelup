import './App.css';
import { Routes, Route, useNavigation} from 'react-router-dom'
import Mypage from './components/Mypage';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import Students from './components/Students';
import { useEffect, useState } from 'react';
import AllClasses from './components/AllClasses';
import Skills from './components/Skills';

function AuthenticatedApp({ currentUser, setCurrentUser }) {

  // const navigate = useNavigation()
  
  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          // navigate('/')
        }
      })
  }

 
 
    
  return (
    <AppStyler>
      
      <nav>
        <NavBar handleLogout={handleLogout} currentUser={currentUser}/>
      </nav>
      <Routes>
        <Route path="/mypage" element={<Mypage currentUser={currentUser}/>}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/classes" element={<AllClasses />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </AppStyler>
  );
}

export default AuthenticatedApp;
         

const AppStyler = styled.div`
  background-image: "./trophycase.jpg"
`

          

         

          