import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Recomented.css'
import { API_KEY } from '../../data'
import { conver_value } from '../../data'
import moment from 'moment'

const Recomented = ({ CategoryId }) => {

    const [apidata, setapidata] = useState()

    const getrecomentedvideo = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${CategoryId}&key=${API_KEY}`
        const res = await fetch(url)
        const data = await res.json()
        setapidata(data.items)
    }

    useEffect(() => {
        getrecomentedvideo()
        console.log(apidata)
    }, [CategoryId])
    return (
        <div className='recomented--video--container'>
            {
                apidata?.map((item, index) => (
                    <Link to={`/Video/${CategoryId}/${item.id}`} key={index}>
                        <div className='recomented--video--card'>
                            <div className='section-1'>
                                <img src={item.snippet.thumbnails.high.url} alt="" className='recomented--videio--thumbnail' />
                            </div>
                            <div className='section-2'>
                                <h2 className=' recomented--video--title ' >{item.snippet.title.slice(0, 45)}</h2>
                                <h3 className=' recomented--video--channelname'>{item.snippet.channelTitle}</h3>
                                <div className='recomented--viewcount-contain'>
                                    <p>{conver_value(item.statistics?.viewCount)} views &bull;</p>
                                    <p> {moment(item.snippet.publishedAt).fromNow()}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Recomented