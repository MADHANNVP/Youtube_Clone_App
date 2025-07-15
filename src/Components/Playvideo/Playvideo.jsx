import { useEffect, useState } from 'react'
import './Playvideo.css'
import { API_KEY } from '../../data.js'
import Like from '../../assets/like.png'
import Dislike from '../../assets/dislike.png'
import Share from '../../assets/share.png'
import Save from '../../assets/save.png'
import { conver_value } from '../../data.js'
import moment from 'moment'

const Playvideo = ({ VideoId }) => {

  const [apidata, setapidata] = useState()
  const [channel, setchannel] = useState()
  const [commant, setcommant] = useState()

  const getapidata = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${VideoId}&key=${API_KEY}`
    const res = await fetch(url)
    const data = await res.json()
    setapidata(data.items[0])
  }

  const getchanneldata = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata?.snippet?.channelId}&key=${API_KEY}`
    const res = await fetch(url)
    const data = await res.json()
    setchannel(data.items[0])
  }

  const getcommantdata = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${VideoId}&key=${API_KEY}`
    const res = await fetch(url)
    const data = await res.json()
    setcommant(data.items)
  }

  useEffect(() => {
    getapidata()
  }, [VideoId])

  useEffect(() => {
    getchanneldata()
  }, [apidata])

  useEffect(() => {
    getcommantdata()
  }, [channel])
  return (
    <div className='video-container'>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="YouTube video player">
      </iframe>
      <div>
        <h2 className='text-xl mt-1 p-2 md:text-2xl font-bold md:pl-8 md:mt-0'>{apidata?.snippet?.title}</h2>
        <div className='md:flex justify-between px-2 md:px-8'>
          <div className='flex gap-2 items-center '>
            <p>{conver_value(apidata?.statistics?.viewCount)} Views &bull;</p>
            <p>{moment(apidata?.snippet?.publishedAt).fromNow()}</p>
          </div>
          <div className='flex items-center gap-4 mt-3 md:mt-0'>
            <div className='flex items-center gap-2 '>
              <img src={Like} alt="" className='w-4 h-4 md:w-5  md:h-5' />
              <p>{conver_value(apidata?.statistics?.likeCount)}</p>
            </div>
            <div className='flex items-center gap-2 '>
              <img src={Dislike} alt="" className='w-4 h-4 md:w-5  md:h-5' />
            </div>
            <div className='flex items-center gap-2 '>
              <img src={Share} alt="" className='w-4 h-4 md:w-5  md:h-5' />
              <p>Share</p>
            </div>
            <div className='flex items-center gap-2 '>
              <img src={Save} alt="" className='w-4 h-4 md:w-5  md:h-5' />
              <p>Save</p>
            </div>
          </div>
        </div>
        <hr className='h-[2px] bg-gray-100 my-2' />
        <div className='md:px-8 flex justify-between items-center'>
          <div className='flex'>
            <img src={channel?.snippet?.thumbnails.high.url} alt="" className='w-10 h-10 rounded-full m-2' />
            <div className='flex flex-col justify-center'>
              <h3 className='font-bold '>{apidata?.snippet?.channelTitle}</h3>
              <p className='text-sm'>{conver_value(channel?.statistics?.subscriberCount)} Subscribers</p>
            </div>
          </div>
          <button className='p-2 bg-[red] text-white rounded-lg px-4 py-1'>Subscribe</button>
        </div>
        <p className='text-sm md:px-8 mt-2'>{apidata?.snippet?.description.slice(0, 250)}</p>
        <hr className='my-4 ml-8' />
        <h4 className='text-sm text-gray-700 pl-8'>{conver_value(apidata?.statistics.commentCount)} comments</h4>

        {
          commant?.map((item, index) => (
            <div key={index} className='flex md:px-8 mt-4 gap-4'>
              <img src={item.snippet?.topLevelComment.snippet.authorProfileImageUrl} alt="" className='w-10 h-10 rounded-full' />
              <div>
                <div className='md:flex gap-4'>
                  <h3 className='font-bold text-sm mt-2'>{item.snippet?.topLevelComment.snippet.authorDisplayName} </h3>
                  <p className='text-sm text-gray-700 mt-2'>{moment(item.snippet?.publishedAt).fromNow()}</p>
                </div>
                <p className='text-sm text-gray-700 m-1'>{item.snippet?.topLevelComment.snippet.textDisplay}</p>
                <div className='flex items-center gap-2 '>
                  <img src={Like} alt="" className='w-4' />
                  <p className='text-sm'>{conver_value(item.snippet?.topLevelComment.snippet.likeCount)}</p>
                  <img src={Dislike} alt="" className='w-4' />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Playvideo