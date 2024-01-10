import React, { useContext } from 'react'
import { Home } from './pages/Home';
import { Login } from './components/login/Login';
import { Registration } from './components/registration/Registration';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { AuthContext } from './components/context/AuthContext';
import { Profile } from './components/profile/Profile';

//import './App.css'
// import Header from './components/header/Header';
// import UserInput from './components/userInput/UserInput';
// import TableInput from './components/tableheader/TableInput';


const App = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  
  return ( 
    <Router>
      <div >
        <Routes>
          <Route exact path="/" element={<Home /> } />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </div>
    </Router>
     
  );
}

export default App;
