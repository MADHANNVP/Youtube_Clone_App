import {useState} from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import Feet from '../../Components/Feet/Feet.jsx'

const Home = () => {

  const [sidebar , setsidebar] = useState(false)
  const [category , setcategory] = useState(0) 

  return (
    <>
       <Navbar setsidebar={setsidebar}/>
       <div className='mt-16 md:flex'>
         <div className='md:w-fit-content md:h-[100%]  '>
         <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
         </div>
         <div className='w-full'>
           <Feet category={category} />
         </div>
       </div>
    </>
  )
}

export default Home