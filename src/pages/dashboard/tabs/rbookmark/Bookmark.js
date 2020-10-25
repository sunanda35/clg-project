import React from 'react'
import './bookmark.css'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

export default function Bookmark() {
    return (
        <div className='bookmark'>
            <p>Recent Bookmark</p>
            <div className='hr'></div>
            <p className='b_data'>Bookmark</p>
            <p className='b_data'>Bookmark</p>
            <p className='b_data'>Bookmark</p>
            <p className='b_data'>Bookmark</p>
            <p className='b_data'>Bookmark</p>
            <p className='b_data'>Bookmark</p>
            <p className='b_data'>Bookmark</p>
            <div className='btn'>
            <h4 className='btn'>View all<DoubleArrowIcon className='icn' fontSize='large'/></h4>
            
            </div>
            
        </div>
    )
}
