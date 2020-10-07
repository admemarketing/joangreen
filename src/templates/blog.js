import React from 'react'
import {graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Thumbnail from '../../static/thumbnail/author-thumbnail.png'
import { DiscussionEmbed } from "disqus-react"
import ReactPlayer from 'react-player'

export const query = graphql`
	query($slug:String!){
		markdownRemark(fields : {slug: {eq : $slug}}){
			frontmatter{
				title
				date
			}
			html
		}
	}
`

const Blog = (props) =>{

    const slug =(props.location.href);
    
    const disqusConfig = {
      shortname: 'peter-johnston-1',
      config: { identifier:  12, slug}
    }


    console.log(props.path);

    return(
        <>
            <Layout>
                <Nav 
                    pathExt={props.path}
                    blogNav={true}
                 />

           
                <section className="section-single-blog-post">
                	<div className="container">

                        <div className="two-blog-grid">
                            <div className="single-post-thumbnail">
                                <img src={Thumbnail} alt="thumbnail"/>
                            </div>
                            <div className="single-post-meta">
                                <span className="author-name-single-post">
                                    <Link to="/about-the-author">Peter Johnston</Link>
                                </span>

                               <span className="single-post-date">
                                Published On: {props.data.markdownRemark.frontmatter.date}
                               </span>
                            </div>
                        </div> 

                    	<h1 className="single-heading-title-post">
                    		{props.data.markdownRemark.frontmatter.title}
                    	</h1>

                        {
                            props.path === '/blog/defense-against-the-covid-19'&& (
                                <div className="grid-video-container">
                                    <div className="player-wrapper">
                                        <ReactPlayer
                                            className="react-player"
                                            url={"https://peterjohnstonauthor.com/wp-content/uploads/2020/03/blog-1.mp4"}
                                            width="100%"
                                            height="400px"
                                            controls={true}
                                            playIcon
                                        />
                                    </div>
                                </div>
                            )
                        }


                        <div className="single-post-content">
                             <div 
                                dangerouslySetInnerHTML={{__html: `${props.data.markdownRemark.html}`}}
                              />
                        </div>

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>

                	</div>
                </section>
            </Layout>
        </>
    )
}

export default Blog