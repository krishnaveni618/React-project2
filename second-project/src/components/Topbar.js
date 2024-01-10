import './Topbar.css'

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';

export const Topbar = () => {
  return (
    <div className='topbarcontainer'>
      <div className='topbarleft'>
           <span className='logo'>Lamsocial</span>
      </div>
      <div className='topbarcenter'>
        <div className='searchbar'>
          <SearchIcon className='searchicon'/>
          <input placeholder='Search for a friend' className='searchinput'/>
        </div>
      </div>
      <div className='topbarright'>
        <div className='topbarlinks'>
          <span className='topbarlink'>Homepage</span>
          <span className='topbarlink'>Timeline</span>
        </div>
        <div className='topbaricons'>
            <div className='topbariconitem'>
              <PersonIcon />
              <span className='topbariconsBadge'>1</span>
            </div>
            <div className='topbariconitem'>
            <Chat />
              <span className='topbariconsBadge'>2</span>
            </div>
            <div className='topbariconitem'>
            <Notifications />
              <span className='topbariconsBadge'>1</span>
            </div>      
        </div>
        <img src='asserts/menimage.png' alt='vhd' className='topperimage'/>
      </div>
    </div>
  )
}


