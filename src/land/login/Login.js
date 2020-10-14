import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='lgin'>
            <h1>It's my Login page</h1>
            <Link to='./Page'>Go Main page</Link>
        </div>
    )
}

export default Login
