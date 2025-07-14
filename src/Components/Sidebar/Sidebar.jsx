import './Sidebar.css'
import Home from '../../assets/Home.png'
import Gaming from '../../assets/Game_icon.png'
import Sports from '../../assets/Sports.png'
import Entertainment from '../../assets/Entertainment.png'
import News from '../../assets/News.png'
import Music from '../../assets/Music.png'
import Blogs from '../../assets/Blogs.png'
import Technology from '../../assets/Tech.png'
import Automobiles from '../../assets/Automobiles.png'
import EMC from '../../assets/EMC.jpg'
import A2D from '../../assets/A2D.jpg'
import VJ_Siddu from '../../assets/VJ_Siddu.jpg'
import Madhan_Gowri from '../../assets/Madhan_Gowri.jpg'
import TechSuperstar from '../../assets/TechSuperstar.jpg'
import TechBoss from '../../assets/TechBoss.jpg'

const Sidebar = ({sidebar ,category ,setcategory}) => {

    const sidebardetails = [
        {
            img: Home,
            title: "Home",
            category:0
        },
        {
            img: Gaming,
            title: "Gaming",
            category:20
        },
        {
            img: Sports,
            title: "Sports",
            category:17
        },
        {
            img: Entertainment,
            title: "Entertainment",
            category:24
        },
        {
            img: Technology,
            title: "Technology",
            category:28
        },
        {
            img: Music,
            title: "Music",
            category:10
        },
        {
            img: News,
            title: "News",
            category:25
        },
        {
            img: Blogs,
            title: "Blogs",
            category:22
        },
        {
            img: Automobiles,
            title: "Automobiles",
            category:2
        },
    ]

    const subscribeddata = [
        {
            img: EMC,
            title: "Error Makes Clever"
        },
        {
            img: A2D,
            title: "A2D Channel"
        },
        {
            img: VJ_Siddu,
            title: "Vj Siddhu Vlogs"
        },
        {
            img: Madhan_Gowri,
            title: "Madan Gowri"
        },
        {
            img: TechSuperstar,
            title: "TechSuperstar"
        },
        {
            img: TechBoss,
            title: "Tech Boss"
        },
    ]

    return (
        <div className={`sidebar ${sidebar?'':'small-sidebar'} hidden md:flex`}>
            {
                sidebardetails.map((item, index) => (
                    <div key={index} className='sidebar-item' onClick={() => {setcategory(item.category)}}>
                        <img src={item.img} alt={item.title} className={`sidebar-icon ${category==item.category?'active':''}`} />
                        <h3 className='sidebar-label'>{item.title}</h3>
                    </div>
                ))
            }

            <hr />
            <h2 className='subscribed--title'>SUBSCRIBED</h2>
            <div className='subscribed--list'>
            {
                subscribeddata.map((item, index) => (
                    <div key={index} className='subscribed--item'>
                        <img src={item.img} alt={item.title} className='subscribed--icon'/>
                        <h3 className='subscribed--label'>{item.title}</h3>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Sidebar