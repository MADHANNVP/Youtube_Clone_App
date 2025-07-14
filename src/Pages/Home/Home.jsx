import {useState} from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import Feet from '../../Components/Feet/Feet.jsx'

const Home = () => {

  const [sidebar , setsidebar] = useState(false)
  const [category , setcategory] = useState(0)
  const [search ,setsearch] = useState("")

  return (
    <>
       <Navbar setsidebar={setsidebar} search={search} setsearch={setsearch} />
       <div className='mt-16 flex'>
         <div className='w-fit-content h-[100%]  '>
         <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
         </div>
         <div className='w-full px-2 md:px-4'>
           <Feet category={category} />
         </div>
       </div>
    </>
  )
}

export default Home