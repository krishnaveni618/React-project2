import React from 'react'
import './Online.css'

export const Online = ({user}) => {
  return (
    <li className='rightbarFriend'>
               <div className='rightbarProfileimgcontainer'>
                   <img src={user.profilePicture} alt='friends'  className='rightbarProfile'/>
                   <span className='rightbarOnline'></span>
               </div>
            <span className='rightbarusername'>{user.userName}</span>
     </li>
  )
}
