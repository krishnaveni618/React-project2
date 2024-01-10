import React from 'react'
import { Topbar } from '../components/Topbar'
import { Sidebar } from '../components/sidebar/Sidebar'

import { Rightbar } from '../components/rightbar/Rightbar'
import { Feedback } from '../components/feed/Feedback'

import './Home.css'
import { Profile } from '../components/profile/Profile'


export const Home = () => {
  return (
    <div>
      <Topbar />
      <div className='homeconatiner'> 
          <Sidebar />
          <div className='homeprofileRight'>
            <div className='homeprofiletop'>
              <Profile />
            </div>
            <div className='homeprofilerightbottom'>
            <Feedback />
             <Rightbar />
            </div>
          </div>
      </div>
    </div>
  )
}
