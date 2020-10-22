import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='lgin'>
            <h1>It's my Login page header</h1>
            <Link to='./Page'>Go Main page</Link>
        
        <div className="login">
           <h1>Login</h1>
          <input type="text" placeholder="  Enter your Email  " name="email" required/>
          <input type="password" placeholder="  Enter your password  " name="pwd" required/>
          <button className="lg-button" type="submit">Login</button>
             <h4><a href="#" className="forget_pswd">forget password?</a></h4> 
              <button type="submit" className="create-acc">Create Account</button>
          </div>
    </div>
    )
}

export default Login