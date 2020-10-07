import React from 'react'
import {Link} from 'gatsby'
import {faTwitter, faInstagram, faFacebook, faGoodreads, faPinterest, faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoFooter from '../../static/logo/stratton-footer-logo.png'
import  Logo from '../../static/logo/main_logo.svg'
import Newsletter from "./newsletter"


const Footer = ()=>{
    
    return(
        <>
            <footer className="footer-section">
                <div className="footer-container footer-grid">

                    <div className="footer-child footer-paragraph-info">
                        
                    <nav className="social-media-nav">

                        <h1 className="footer-heading-links">
                            Follow me on social media
                        </h1>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/Dr-Peter-Johnston-103471954585824/?modal=admin_todo_tour"
                                target="_blank">
                                    <FontAwesomeIcon   
                                        className='font-awesome'
                                        icon={faFacebook} />
                                </a>
                            </li>

                            <li>
                                <a
                                    target="_blank"
                                    href="https://twitter.com/PeterJo85651758">
                                        
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faTwitter} />
                                </a>
                            </li>

                            <li>
                                <a          
                                    target="_blank"
                                    href="">

                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faInstagram} />
                                </a>
                            </li>
                        
                            <li>
                                <a 
                                    target="_blank"
                                    href="">

                                    <FontAwesomeIcon 
                                        className='font-awesome'
                                        icon={faGoodreads} />
                                </a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>

                <div className="footer-child footer-nav">
                    <h5>Navigations</h5>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about-the-author">About the Author</Link>
                            </li>
                            <li>
                                <Link to="/about-the-book">Books</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="footer-child" id="newsletter">
                        <h5>Newsletter</h5>
                        <p>Stay up to date with the latest from me</p>
                        <Newsletter/>
                    </div>
                </div>



            <div className="one-grid-column" id="lower-footer">
                <p className="publisher">
                    &#169; Copyright 2020. Folio Avenue
                </p>
            </div>

            </footer>
        </>
    )
}

export default Footer;


