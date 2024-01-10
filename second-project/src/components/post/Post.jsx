import React, { useState } from 'react'
import './Post.css'
import Morevert from '@mui/icons-material/MoreVert';
import { Users } from '../../Dummydata';

export const Post = ({posts}) => {
  const [like,setLike] = useState(posts.like);
  const [isLike,setIsLike] = useState(false);

const likeHandler = () =>{
      setLike(isLike ? like-1 : like + 1);
      setIsLike(!isLike);
}   

  return (
    <div className='post'>
        <div className='postwrapper'>
            <div className='posttop'>
                <div className='posttopleft'>
                <img src={Users.filter((user) => user.id === posts?.userId)[0].profilePicture} alt='vhd' className='postprofileimage'/>
                <span className='postusername'>{Users.filter((user) => user.id === posts?.userId)[0].userName}</span>
                <span className='postdate'>{posts.date}</span>
                </div>
                <div className='posttopright'>
                <Morevert />
                </div>
            </div>
         <div className='postcenter'>
            <span className='posttext'>{posts.desc}</span>
            <img src={posts.photo} alt='vhd' className='postImg'/>
         </div>
         <div className='postbottom'>
            <div className='postbottomleft'>
             <img src='asserts/like.png' alt='like' className='likeicon' onClick={likeHandler}/>
             <img src='asserts/heart.png' alt='heart'  className='likeicon' onClick={likeHandler}/>
             <span className='postlikecounter'>{like} people like it</span>
            </div>
            <div className='postbottomright'>
             <span className='postcommenttext'>{posts.comment} Comments</span>
            </div>
         </div>
        </div>
    </div>
  )
}
