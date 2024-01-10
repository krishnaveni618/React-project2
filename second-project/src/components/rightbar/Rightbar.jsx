import React from 'react'
import './rightbar.css'
import { Users } from '../../Dummydata'
import { Online } from '../online/Online'

export const Rightbar = () => {
  return (
    <div className='rightbarcontainer'> 
       <div className='rightbarwrapper'>
          <div className='giftcontainer'>
            <img src='asserts/gift.png' alt='gift' className='giftimage'/>
            <span className='gifttext'>
              <b>Pola Foster</b>and <b>3 other friends</b> have a birthday today
            </span>
          </div>
          <img src='asserts/add.png' alt='rightbarAd' className='rightbaradd'/>
          <h4 className='rightbarTitle'>Online friends</h4>
          <ul className='rightbarfriendsList'>
            {Users.map((user) =>(
                <Online key={user.id} user={user}/>
            ))}
          </ul>
       </div>
    </div>
  )
}
