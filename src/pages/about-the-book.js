import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import OnePage from "../components/one-page"
import MainBook from "../../static/books/main_book.png"

const ATB = (props)=>{

    
	return (
		<>
		 	<Layout>

                <OnePage>
                    <Nav pathExt={props.path} 
                        blogNav={false}
                    />

                    <div className="home-page-apparel content-one-page">

                        <div className="book-image-contaienr">
                            <img src={MainBook}  alt="main_book"/>
                        </div>

                        <div class="content-wrapper">
                            
                            <h1 className="blippo-heading">
                                Book
                            </h1>

                            <p>
                                This book "resilience" came to fruition after a statement was
                                made by a member of a group "We Didn't Believe You." This has
                                been a catalyst for joan to write her memoirs. if Joan wasn't believed
                                as an adult; the question was aksed how would a child be heard. Joan's 
                                early memories are happy times with familt and the traditions that were
                                created. i remember having a strong foundation of a love for the Lord.
                                Joan knew that Jesus love her for the Bible told her so. As a child Joan 
                                was sexually abused while sleeping in her own bed. Joan should have been
                                safe. Joan didn't have the words and did not tell anyone. it took fifty four
                                years before Joan felt strong enought to report this crime to the police. Joan's
                                faith has been an integral part of her journey. There are many blessings that
                                come from adversity. Throught each crisis with help from others Joan has
                                learned that there is hope for the future.
                            </p>
                        </div>
                    </div>
                </OnePage>

		 	</Layout>
		</>
	)
}


export default ATB;