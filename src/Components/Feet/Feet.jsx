import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Feet.css'
import { API_KEY } from '../../data'
import { conver_value } from '../../data'
import moment from 'moment'

const Feet = ({ category, search }) => {

  const [apidata, setapidata] = useState([])

  const getapidata = async () => {
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    if (search) {
      url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&key=${API_KEY}`
    }
    const res = await fetch(url)
    const data = await res.json()
    setapidata(data.items)
    console.log(data.items)
  }

  useEffect(() => {
    getapidata()
  }, [category, search])


  return (
    <div className='feet '>
      {
        apidata.map((item, index) => {
          return (
            <Link to={`/Video/${category}/${search ? item.id.videoId : item.id}`} key={index}>
              <img src={item.snippet.thumbnails.high.url}  className='thumbnails' />
              <h2 className='feet--title'>{item.snippet.title}</h2>
              <h3 className='feet--chennaltitle'>{item.snippet.channelTitle}</h3>
              <div className='flex feet-view '>
                {search ? "" : <p>{conver_value(item.statistics?.viewCount)} views &bull;</p>}
                <p> {moment(item.snippet.publishedAt).fromNow()}</p>
              </div>
            </Link>
          )
        })
      }

    </div>
  )
}

export default Feet