import { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import Feet from '../../Components/Feet/Feet.jsx'

const Home = ({ sidebar, search }) => {
  const [category, setcategory] = useState(0)

  return (
    <>
      <div className='mt-16 flex'>
        <div className='w-fit-content h-[100%]  '>
          <Sidebar sidebar={sidebar} category={category} setcategory={setcategory} />
        </div>
        <div className='w-full px-2 md:px-4'>
          <Feet category={category} search={search} />
        </div>
      </div>
    </>
  )
}

export default Home