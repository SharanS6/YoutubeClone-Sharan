import React from 'react'
import "./PlayVideo.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import profile from "../../assets/user_profile.jpg"


const PlayVideo = () => {
    return (

        <div className='play-video'>
            <video src={video1} controls autoPlay></video>
            <h3>Best YouTube Channel To Learn Web Development</h3>
            <div className='play-video-info'>
                <p>1521 View &bull; 2 days ago</p>
            </div>
            <div>
            <span><img src={like} />122</span>
            <span><img src={dislike} />1334</span>
            <span><img src={share} />105</span>
            <span><img src={save} />155</span>
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
            <p>chanel that makes Easy</p>
            <p>Sibscriber GreatStack to watch More Tutorials</p>
            <hr />
            <h4>130 comments</h4>
            <div className='Comment'>
                <img src={profile}></img>
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This tutorial is an absolute gem for anyone diving into React Hooks! The instructor breaks down complex concepts into digestible chunks, making it easy to follow along even for beginners. </p>
                </div>
            </div>
        </div>
        </div>
        

    )
}

export default PlayVideo