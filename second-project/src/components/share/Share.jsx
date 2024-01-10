import React, { useState } from 'react'
import './Share.css'
import PermMedia from '@mui/icons-material/PermMedia';
import Label from '@mui/icons-material/Label';
import Room from '@mui/icons-material/Room';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import Cancel from "@mui/icons-material/Cancel";

export const Share = () => {
 const [file,setFile] =  useState(null);

 const submitFile = (e) =>{
     e.preventDefault();
 }
  return (
    <div className='sharecontainer'>
       <div className='sharewrapper'>
        <div className='sharecontainertop'>
        <img src='asserts/menimage.png' alt='vhd' className='shareimage'/> 
        <input placeholder="What's in your mind safak" className='shareInput'/>
        </div>
        <hr className='sharehr'/>
        {file && (
          <div className='shareImageContainer'>
            <img className='shareimg' src={URL.createObjectURL(file)} alt=''/>
            <Cancel className='shareCacel' onClick={() =>setFile(null)}/>
          </div>
        )}
        <form className='sharecontainerbottom' onSubmit={submitFile}>
            <div className='shareoptions'>
               <label className='shareoption'>
                <PermMedia className='shareIcon' htmlColor='tomato'/>
                <span className='shareoptiontextt'>Photo or voideo</span>
                <input type='file' id='file' accept='.png,.jpeg,.jpg' style={{display:"none"}} onChange={(e) =>setFile(e.target.files[0])}/>
               </label>
               <div className='shareoption'>
                <Label className='shareIcon' htmlColor='blue'/>
                <span className='shareoptiontextt'>Tag</span>
               </div>
               <div className='shareoption'>
                <Room className='shareIcon' htmlColor='green'/>
                <span className='shareoptiontextt'>Location</span>
               </div>
               <div className='shareoption'>
                <EmojiEmotions className='shareIcon' htmlColor='goldenrod'/>
                <span className='shareoptiontextt'>Feelings</span>
               </div>
            </div>
            <button className='sharebutton' type='submit'>Share</button>
        </form>
       </div>
    </div>
  )
}
