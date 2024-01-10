import React from 'react'
import './Profile.css';

export const Profile = () => {
  return (
    <div className='profilecover'>
        <img src='asserts/nature6.png' alt=''className='profilecoverImage'/>
        <img src='asserts/menimage6.png' className='profileImage' alt=''/>
        <div className='profileInfo'>
            <h4 className='profileInfoNmae'>Safak Kocaoglu</h4>
            <span className='profileinfdescription'>Hello my Friends</span>
        </div>
    </div>
  )
}
