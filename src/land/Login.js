import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'

function Login() {
    return (
        <div className='lgin'>
            <Header/>
            <h1>It's my Login page</h1>
            <Link to='./Page'>Go forward</Link>
        </div>
    )
}

export default Login
