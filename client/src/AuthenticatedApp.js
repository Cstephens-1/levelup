import './App.css';
import { Routes, Route} from 'react-router-dom'
import Mypage from './components/Mypage';
import NavBar from './components/NavBar';
import styled from 'styled-components';

function AuthenticatedApp({ currentUser, setCurrentUser }) {

  // const history = useHistory()
  
  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          // history.push('/')
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
      </Routes>
    </AppStyler>
  );
}

export default AuthenticatedApp;
         

const AppStyler = styled.div`
  background-image: "./trophycase.jpg"
`

          

         

          