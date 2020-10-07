import React from 'react'
import {Link} from 'gatsby'
import  VideoBanner from '../../static/banner/video_trailer.mp4'
import Parser from 'html-react-parser';

const Banner = (props)=>{
    return (
        <> 
            <section className="videp-banner">
                <video autoPlay loop muted id="myVideo">
                    <source src={VideoBanner} type="video/mp4"></source>
                    <source src={VideoBanner} type="video/ogg"></source>
                </video>

                <div className="heading-banner-section">
                    <h1 className="heading-letters">
                        {Parser(props.titlePage)}
                    </h1> 
                    <p className="subheading-tag">The importance of love in healthcare</p>
                </div>
            </section>

        </>
    )
}

export default Banner;