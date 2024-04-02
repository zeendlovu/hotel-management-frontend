import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';


const Navbar = () => {
    return(
        <div className="navbar">
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='Search...' className="inputText" />
                    <SearchOutlinedIcon />
                </div>
                <div className='items'>
                    <div className='item'>
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>
                   

                    <div className='item'>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <div className='counter'>1</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        <div className='counter'>2</div>
                    </div>
                    <div className='item'>
                        <ListOutlinedIcon className='icon' />
                    </div>

                    <div className='item'>
                        <img src='https://cdn.pixabay.com/photo/2022/02/15/19/39/panda-7015575_960_720.jpg' alt='' className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;