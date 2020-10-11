import React from 'react'
import './page.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Drawer from '../pages/drawer/Drawer'
import Dashboard from '../pages/dashboard/Dashboard'

function Page() {
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

export default Page
