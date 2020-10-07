import React, {useState, useEffect } from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/banner'
import ReactPlayer from 'react-player/youtube'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*
*  Images
*/
import Img1 from '../../static/gallery/image_1.jpeg'
import Img2 from '../../static/gallery/image_2.jpeg'
import Img3 from '../../static/gallery/image_3.jpeg'
import Img4 from '../../static/gallery/image_4.jpeg'

const Gallery = (props)=>{

    const [mobState, __functState] = useState(false);

    useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });

    }, [mobState]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: (mobState) ? 1 : 4,
        slidesToScroll: 1,
    };

    return(
        <>
            <Layout>
                <Nav 
                    pathExt={props.path}
                    blogNav={false}
                />

		 		<Banner titlePage={`<span>Gallery</span>`}/>
        
                <div className="gallery-images">

                    <h1 className="heading-gallery">Photos</h1>

                    <Slider {...settings}>
                        <div className="gallery-slider">
                            <img alt="auth_image" src={Img1}/>
                        </div>

                        <div className="gallery-slider">
                            <img alt="auth_image" src={Img2}/>
                        </div>

                        <div className="gallery-slider">
                            <img alt="auth_image" src={Img3}/>
                        </div>

                        <div className="gallery-slider">
                            <img alt="auth_image" src={Img4}/>
                        </div>
                    </Slider>
                </div>

                <div className="video-thumbnail">
                    <h1 className="heading-gallery">Videos</h1>

                    <div className="video-grid">
                        <div className="grid-child">
                            <div className="video-thumb-container">
                                <div className="player-wrapper">
                                    <ReactPlayer 
                                        className="react-player"
                                        url={"https://www.youtube.com/embed/xKFbaz-yHJY?feature=oembed"}
                                        width="100%"
                                        height="400px"
                                        controls={true}
                                        playIcon
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid-child">
                            <div className="video-thumb-container">
                                <div className="player-wrapper">
                                    <ReactPlayer 
                                        className="react-player"
                                        url={"https://www.youtube.com/embed/YycwnKMy5qM?feature=oembed"}
                                        width="100%"
                                        height="400px"
                                        controls={true}
                                        playIcon
                                    />
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Gallery;