import React from 'react'
import './bookmark.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Bookmark() {
    return (
        <div className='bookmark'>
            <h3>Recent Bookmark</h3>
            <div className='hr'></div>
            <p className='b_data'># Bookmark page 1</p>
            <p className='b_data'># Bookmark page 2</p>
            <p className='b_data'># Bookmark page 3</p>
            <p className='b_data'># Bookmark page 4</p>
            <div className='btn'>
            <button className='btn-head'>View all</button>
            <ExpandMoreIcon style={{color:'white',marginLeft:'-100px'}} className='icn' fontSize='small'/>
            </div>
        </div>
    )
}
