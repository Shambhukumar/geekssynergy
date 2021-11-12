import React, {useState} from "react";
import "./Signup.scss";

const Signup = (props) => {
  const [error, setError] = useState(false);

  const setErrorMessage = (message) =>{
    setError(message);
    setTimeout(() => {
      setError(false)
    }, 15000);
  }

  const getValue = (e) =>{
    e.preventDefault()
    const Registration = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    phone : document.getElementById("phone").value,
    profession : document.getElementById("profession").value,
    password : document.getElementById("password").value,
    confirmPassword : document.getElementById("confirmPassword").value,
    }
    if(Registration.password !== Registration.confirmPassword){
      document.getElementById("confirmPassword").style.borderColor = "red";
      setErrorMessage("Please make sure password and confirm passsword should be same.")
    }else{
      const checkEmailExist =  localStorage.getItem(Registration.email);
      if(!checkEmailExist){
        localStorage.setItem(Registration.email,JSON.stringify(Registration))
        props.setLogin(true);
      }else{
        setErrorMessage("An Account already Exist with this email please use defferent one.")
        document.getElementById("email").style.borderColor = "red";
      }
     
      document.getElementById("confirmPassword").style.borderColor = "rgb(50, 179, 172)";

    }


  }
  return (
    <div className="Signup">
      <form className="Signup__form" onSubmit={getValue}>
        <span className="Signup__form--head">Sign Up</span>
        <h4>{error && error}</h4>
        <ul className="Signup__form--list">
          <li>
            <label>Name: </label> <input type="text" required id="name"/>
          </li>
          <li>
            <label>Email: </label> <input type="email" required id="email" />
          </li>
          <li>
            <label>Phone Number: </label> 
           
              <input type="number" required id="phone"/>
              
          </li>
          <li>
            <label>Profession:</label>
            <select id="profession">
              <option value="Softweare Devloper">Softweare Devloper</option>
              <option value="Real Estate Agent">Real Estate Agent</option>
            </select>
          </li>
          <li>
            <label>Password: </label> <input type="password" required id="password"/>
          </li>
          <li>
            <label>Confirm Password: </label> <input type="password" required id="confirmPassword"/>
          </li>
        </ul>

        <button className="Signup--btn">Sign Up</button>
        <span className="Signup--login">
          Already have an Account?{" "}
          <span onClick={() => props.setLogin(true)}>Log in</span>
        </span>
      </form>
    </div>
  );
};

export default Signup;
