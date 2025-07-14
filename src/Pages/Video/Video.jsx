import { useParams } from 'react-router-dom'
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recomented from '../../Components/Recomented/Recomented'

const Video = () => {
  const { VideoId, CategoryId } = useParams()
  
  return (
    <div className='px-4 mt-20 videocontainer'>
      <div className='playvideo'>
        <Playvideo VideoId={VideoId} />
      </div>
      <div className='recomentedvideo'>
        <Recomented CategoryId={CategoryId} />
      </div>
    </div>
  )
}

export default Video