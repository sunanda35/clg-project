import React from 'react'
import './Dashboard.css'
import RecentBookmark from './tabs/rbookmark/Bookmark'
import Chart from './Chart'
function Dashboard() {
    return (
        <div>
            <h1>components about science, sports, etc.....</h1>
            <div className='f_dashboard'>
               <Chart/>
                <RecentBookmark/>
            </div>
        </div>
    )
}

export default Dashboard
