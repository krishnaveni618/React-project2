import React from 'react'
import './sidebar.css'
import FeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat'
import VideoIcon from '@mui/icons-material/MusicVideoSharp'
import GroupIcon from '@mui/icons-material/Group'
import Bookmark from '@mui/icons-material/Bookmark';
import HelpOutline from '@mui/icons-material/HelpOutline'
import WorkOutline from '@mui/icons-material/WorkOutline'
import Event from '@mui/icons-material/Event'
import School from '@mui/icons-material/School'
import { CloseFriend } from '../closefriend/CloseFriend'

import { Users } from '../../Dummydata'

export const Sidebar = () => {
  return (
    <div className='sidebarconatienr'>
       <div className='sidebarwrapper'>
          <ul className='sidebarlist'>
           <li className='sidebarlistitem'>
            <FeedIcon className='sidebaricon'/>
             <span className='sidebarlistitemtext'>Feed</span>
           </li>
           <li className='sidebarlistitem'>
            <ChatIcon className='sidebaricon'/>
             <span className='sidebarlistitemtext'>Chats</span>
           </li>
           <li className='sidebarlistitem'>
            <VideoIcon className='sidebaricon'/>
             <span className='sidebarlistitemtext'>Videos</span>
           </li>
           <li className='sidebarlistitem'>
            <GroupIcon className='sidebaricon'/>
             <span className='sidebarlistitemtext'>Groups</span>
           </li>
           <li className='sidebarlistitem'>
            <Bookmark className='sidebaricon'/>
             <span className='sidebarlistitemtext'>Bookmarks</span>
           </li>
           <li className='sidebarlistitem'>
            <HelpOutline className='sidebaricon'/>
             <span className='sidebarlistitemtext'>Questions</span>
           </li>
           <li className='sidebarlistitem'>
            <WorkOutline className='sidebaricon'/>
             <span className='sidebarlistitemtext'>Jobs</span>
           </li>
           <li className='sidebarlistitem'>
            <Event className='sidebaricon'/>
             <span className='sidebarlistitemtext'>Events</span>
           </li>
           <li className='sidebarlistitem'>
            <School className='sidebaricon'/>
             <span className='sidebarlistitemtext'>Courses</span>
           </li>
          </ul>
          <button className='sidebarbutton'>Show More</button>
          <hr className='sidebarhr'/>
          <ul className='sidebarfriendsList'>
            {Users.map((user) =>(
                   <CloseFriend key={user.id} user={user}/>
            ))}  
          </ul>
       </div>
    </div>
  )
}
