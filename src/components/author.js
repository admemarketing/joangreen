import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/main_author.png'
import ReactPlayer from 'react-player/youtube'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-one-col">
                     <div className="grid-child" id="author-contents">
                        
                        <h1>
                            <span>WELCOME TO MY WEBSITE</span>
                        </h1>

                        <div className="grid-video-container">
                            <div className="player-wrapper">
                                <ReactPlayer
                                    className="react-player"
                                    url={"https://www.youtube.com/embed/xKFbaz-yHJY"}
                                    width="100%"
                                    height="400px"
                                    controls={true}
                                    playIcon
                                />
                            </div>
                        </div>

                        <p className="content-index">
                            I have written <span className="span-text-italic">"The Eagles Way"</span> to help the reader
                            understand holistic or integrative medicine. for most illness,
                            conventional medicine is the first port of call but for those
                            with chronic disease, alternative or complementary therapies 
                            can be very helpful.
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Author;