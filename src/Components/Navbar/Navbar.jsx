import './Navbar.css'
import search_icon from '../../assets/Search.png'
import Upload from '../../assets/Upload.png'
import More from '../../assets/More.png'
import Notification from '../../assets/Notification.png'
import Login from '../../assets/Login.jpg'

const Navbar = ({setsidebar ,search , setsearch}) => {
  return (
    <nav className='z-10 bg-white'>
        <div className='navbar-left'>
            <button className='menu-button' onClick={()=>{setsidebar((pres) => pres==true?false:true)}}>
                <span className='menu-line'></span>
                <span className='menu-line'></span>
                <span className='menu-line'></span>
            </button>
            <img className='youtube-logo' src={"https://kstatic.googleusercontent.com/files/eae0fcc1c67cc38d9c2cd2300f46c8e821fcd6bc3bafa1d222426a6a4d5f2081071424c94454d9d3b967ab373b16b6345a9fe9df890183f327400624d123f32d"} alt="Youtube" />
        </div>
        <div className='navbar-middle'>
            <input type="text" className="navbar-search-input" placeholder='Search'  onChange={(e) => { setsearch(e.target.value) 
                console.log(search)
            } } />
            <button className="search-button">
                <img src={search_icon} alt="navbar-search-icon" />
            </button>
        </div>
        <div className='navbar-right'>
            <img src={Upload} alt="Upload" className="navbar-icon" />
            <img src={More} alt="More" className="navbar-icon" />
            <img src={Notification} alt="Notification" className="navbar-icon" />
            <img src={Login} alt="Login" className="navbar-logo-icon" />
        </div>
    </nav>
  )
}

export default Navbar