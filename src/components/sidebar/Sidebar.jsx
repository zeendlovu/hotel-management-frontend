import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ErrorIcon from '@mui/icons-material/Error';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HouseIcon from '@mui/icons-material/House';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className='top'>
                    <span className='logo'>Harmony Heights Hotel</span>

            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>

                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    <p className='title'>CUSTOMER SERVICE</p>
                        <li>
                            <PeopleIcon className='icon' />
                            <span>Customers</span>
                        </li>
                        <li>
                            <LibraryBooksIcon className='icon' />
                            <span>Bookings</span>
                        </li>
                    <li>
                        <HouseIcon className='icon' />
                        <span>Rooms</span>
                    </li>
                    <li>
                        <OtherHousesIcon className='icon' />
                        <span>Room Types</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <EqualizerIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <ErrorIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>


    )
}

export default Sidebar;