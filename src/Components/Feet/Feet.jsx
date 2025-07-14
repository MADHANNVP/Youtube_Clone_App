import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Feet.css'
import { API_KEY } from '../../data'
import { conver_value } from '../../data'
import moment from 'moment'

const Feet = ({ category }) => {

  const [apidata, setapidata] = useState([])

  const getapidata = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
    const data = await fetch(url).then(res =>res.json())   
   setapidata(data?.items)
  }

  useEffect(() => {

   getapidata()
  }, [category])


  return (
    <div className='feet '>
      {
        apidata?.map((item, index) => (
          <Link to={`/Video/${item.snippet.categoryId}/${item.id}`} key={index}> 
            <img src={item.snippet.thumbnails.high.url} alt="" className='thumbnails' />
            <h2 className='feet--title'>{item.snippet.title}</h2>
            <h3 className='feet--chennaltitle'>{item.snippet.channelTitle}</h3>
            <div className='flex feet-view '>
              <p>{conver_value(item.statistics.viewCount) + " views "} &bull; </p>
              <p> {moment(item.snippet.publishedAt).fromNow()}</p>
            </div>
          </Link>
        ))
      }

    </div>
  )
}

export default Feet