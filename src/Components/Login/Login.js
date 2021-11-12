
import "./Login.scss"
import { useState } from "react/cjs/react.development";

const Login = (props) => {
const [error, setError] = useState(false);

const setErrorMessage = () =>{
  setError("Invalid Credientials");
  setTimeout(() => {
    setError(false)
  }, 15000);
}
  const getValue = (e) =>{
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const regObj = JSON.parse(localStorage.getItem(email));
    if(!regObj){
      document.getElementById("email").style.borderColor = "red";
      setErrorMessage()
      
    }else{
      document.getElementById("email").style.borderColor = "rgb(50, 179, 172)";
      if(password === regObj.password){
        document.getElementById("password").style.borderColor = "rgb(50, 179, 172)";
        props.auth(true)
        console.log("Logged in Successfully")
      }else{
        document.getElementById("password").style.borderColor = "red";
        setErrorMessage()
      }
     
    }
  }
  return (
    <div className="Login">
      <form className="Login__form" onSubmit={getValue}>
      <span className="Login__form--head">Login</span>
      <h4>{error && error}</h4>
        <ul className="Login__form--list">
          <li>
            <label>Email: </label> <input type="email" required id="email"/>
          </li>
          <li>
            <label>Password: </label> <input type="password" required id="password" />
          </li>
        </ul>

        <button className="Login--btn">Login</button>
        <span className="Login--signup">Don't have an Account? <span onClick={()=>props.setSignUp(false)}>Sign Up</span></span>
      </form>
    </div>
  );
};

export default Login;
