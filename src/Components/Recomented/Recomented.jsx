import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
        <div className='flex flex-col gap-2'>
            {
                apidata?.map((item, index) => (
                    <Link to={`/Video/${CategoryId}/${item.id}`} key={index}>
                        <div className='flex gap-1 w-[100%]'>
                            <div className='w-[60%]'>
                                <img src={item.snippet.thumbnails.high.url} alt="" className='w-full h-44 rounded-xl object-cover md:h-fit md:w-fit' />
                            </div>
                            <div className='w-[40%]'>
                                <h2 className='text-2xl  md:text-[14px] font-semibold mt-8 mb-1 ' >{item.snippet.title}</h2>
                                <h3 className=' text-xl md:text-[13px]'>{item.snippet.channelTitle}</h3>
                                <div className='flex text-sm md:text-[12px]'>
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