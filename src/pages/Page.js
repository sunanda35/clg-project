import React from 'react'
import './page.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Navbar from './drawer/Navbar'
import Dashboard from './dashboard/Dashboard'

export default function Page() {
    return (
        <div>
            <Header/>
            <div className='page'>
                <Navbar/>
                <Dashboard/>
            </div>
            <Footer/>
        </div>
    )
}
