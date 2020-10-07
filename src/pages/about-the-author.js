import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/banner'
import AuthorImg from '../../static/author/author.jpeg'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 <Banner titlePage={`<span>About</span><span>the</span><span>Author</span>`}/>
                  
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                               PETER JOHNSTON HAS BEEN A FAMILY DOCTOR FOR FIFTY YEARS,
                               HIS WIFE'S INCURABLE ILLNESS IN 1979 LED HIM  TO EXPLORE
                               THE CONNECTION BETWEEN THE BODY, MIND AND CONSCIOUNSNESS.
                               AS PIONEER OF HOLISTIC MEDICINE, HE HAS COMBINED ALTERNATIVE
                               APPROACHES WITH ORTHODOX MEDICINE FOR FORTY YEARS.
                            </p>
                        </article>
                    </section> 
                </div>          

		 	</Layout>
		</>
	)
}


export default ATB;