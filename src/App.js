import { useState } from 'react';
import './App.css';
import Signup from './Components/SignUp/Signup';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
const App =() => {
  
  const [Authentication, setAuthentication] = useState(false);

  const LoginRegistration = () =>{
    const [login, setLogin] =  useState(false);
    return(
      <div>
      {login ? <Login setSignUp={setLogin} auth={setAuthentication}/> : <Signup setLogin={setLogin} auth={setAuthentication}/> }
    </div>
    )
  }



  return (
    <div className="App">
     { !Authentication ? <LoginRegistration/> : <Main/> }
    </div>
  );



}

export default App;
