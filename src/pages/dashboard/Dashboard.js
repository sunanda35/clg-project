import React from 'react'
import './Dashboard.css'
import RecentBookmark from './tabs/rbookmark/Bookmark'

function Dashboard() {
    return (
        <div>
            <h1>components about science, sports, etc.....</h1>
            <div className='f_dashboard'>
                <h2>Graph</h2>
                <RecentBookmark/>
            </div>
        </div>
    )
}

export default Dashboard
