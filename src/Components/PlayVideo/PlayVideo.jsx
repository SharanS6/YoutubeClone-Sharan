import React, { useEffect } from 'react'
import "./PlayVideo.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import profile from "../../assets/user_profile.jpg"
import { useState } from 'react'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment/moment'
const PlayVideo = ({videoId}) => {

    const [apiData,setApiData]=useState(null);
    const fetchVideoData=async()=>{

        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
            await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]))
    }

    useEffect(()=>{
        fetchVideoData()
    },[])
    return (

        <div className='play-video'>
            {/* <video src={video1} controls ></video> */}
            <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="Selected as Frontend Intern | HTML, CSS, and JavaScript | ProCodrr Mock Interviews" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
            <div className='play-video-info'>
                <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"2 days agp"}</p>
            
            <div>
            <span><img src={like} />{apiData?value_converter(apiData.statistics.likeCount):"160"}</span>
            <span><img src={dislike} />101</span>
            <span><img src={share} />Share</span>
            <span><img src={save} />Save</span>
        </div>
        </div>
        <hr/>
        <div className="publisher">
            <img src ={jack} alt=''></img>
            <div>
                <p>GreatStack</p>
                <span>1M subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>channel that makes Easy</p>
            <p>Subscribe GreatStack to watch More Tutorials</p>
            <hr />
            <h4>130 comments</h4>
            <div className='Comment'>
                <img src={profile}></img>
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This tutorial is an absolute gem for anyone diving into React Hooks! The instructor breaks down complex concepts into digestible chunks, making it easy to follow along even for beginners. </p>
                <div className="comment-action">
                    <img src={like} alt=""  />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
                </div>
            </div>
            <div className='Comment'>
                <img src={profile}></img>
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This tutorial is an absolute gem for anyone diving into React Hooks! The instructor breaks down complex concepts into digestible chunks, making it easy to follow along even for beginners. </p>
                <div className="comment-action">
                    <img src={like} alt=""  />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
                </div>
            </div>
            <div className='Comment'>
                <img src={profile}></img>
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This tutorial is an absolute gem for anyone diving into React Hooks! The instructor breaks down complex concepts into digestible chunks, making it easy to follow along even for beginners. </p>
                <div className="comment-action">
                    <img src={like} alt=""  />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
                </div>
            </div>
            <div className='Comment'>
                <img src={profile}></img>
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This tutorial is an absolute gem for anyone diving into React Hooks! The instructor breaks down complex concepts into digestible chunks, making it easy to follow along even for beginners. </p>
                <div className="comment-action">
                    <img src={like} alt=""  />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
                </div>
            </div>
            <div className='Comment'>
                <img src={profile}></img>
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This tutorial is an absolute gem for anyone diving into React Hooks! The instructor breaks down complex concepts into digestible chunks, making it easy to follow along even for beginners. </p>
                <div className="comment-action">
                    <img src={like} alt=""  />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
                </div>
            </div>
            <div className='Comment'>
                <img src={profile}></img>
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This tutorial is an absolute gem for anyone diving into React Hooks! The instructor breaks down complex concepts into digestible chunks, making it easy to follow along even for beginners. </p>
                <div className="comment-action">
                    <img src={like} alt=""  />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
                </div>
            </div>
        </div>
        </div>
        

    )
}

export default PlayVideo