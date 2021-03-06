import React from 'react'
import './header.css'
import {title, logo} from '../../production/string'
import Avatar from '@material-ui/core/Avatar';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <img src={logo} alt={title}/>
            </div>
            <div className='header_right'>
                <ul>
                    <li className='h_r_search'>
                        <input type='text' placeholder='Search here'/>
                        <SearchIcon className='h_r_s_icon'/>
                    </li>
                    <li><NotificationsNoneIcon/></li>
                    <li><Avatar src='https://avatars3.githubusercontent.com/u/46472626?s=400&u=fbdf983ebbbed39b396e12718971d582c123d7f3&v=4' alt='avatar'/></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
