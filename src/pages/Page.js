import React from 'react'
import './page.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Drawer from './drawer/Drawer'
import Dashboard from './dashboard/Dashboard'

export default function Page() {
    return (
        <div>
            <Header/>
            <div className='page'>
                <Drawer/>
                <Dashboard/>
            </div>
            <Footer/>
        </div>
    )
}
