import React  from 'react'
import './feedbar.css'
import { Share } from '../share/Share'
import { Post } from '../post/Post'


import { Posts } from '../../Dummydata'


export const Feedback = () => {
  return (
    <div className='feedbarcontainer'>
      <div className='feedwrapper'>
      <Share />
      {Posts.map((post) =>(
        <Post posts={post} key={post.id}/>
      ))} 
      </div>
    </div>
  )
}
