import React from 'react'

export const CloseFriend = ({user}) => {
  return (
    <li className='sidebarFriends'>
    <img src={user.profilePicture} alt='' className='sidebarfriendimg'/>
    <span className='sidebarfriendsname'>{user.userName}</span>
   </li>
  )
}
