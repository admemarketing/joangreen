import React from 'react'
import OnePage from "../components/one-page"
import Layout from '../components/layout'
import Nav from '../components/nav'
import Inputs from "../components/Inputs/inputs"


/*Social Media Icons*/
import Fb from "../../static/social/fb.png"
import Pinterest from "../../static/social/pinterest.png"
import Twitter from "../../static/social/twitter.png"


const Contact = (props)=>{

	function OnSubmitForm (e) {
	    e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
            } else {
            	console.log('something went wrong')
            }
        };
        xhr.send(data);
    }

    return(
        <>
            <Layout>
                <OnePage>
                    <Nav pathExt={props.path}
                        blogNav={false}
                    />

                    <div className="contact-form-custom">

                        <div className="custom-container-social-login">
                            <h1>Joan Green</h1>

                            <ul className="social-media-icons">
                                <li>
                                    <a href="">
                                        <img src={Pinterest} alt="social-icons" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={Fb} alt="social-icons" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={Twitter} alt="social-icons" />
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div class="content-wrapper">
                            <h1 className="blippo-heading">
                                Contact
                            </h1>

                            <form 
                                onSubmit={OnSubmitForm}
                                action="https://formspree.io/xvopdpny"
                                method="POST">

                                <div className="form__appex">
                                    <Inputs 
                                        name="fullname" 
                                        type="text" />
                                    <Inputs 
                                        name="email"
                                        type="email" />

                                    <textarea 
                                        type="text" name='message' 
                                        className="textArea"
                                        placeholder='Message'
                                        required />
        
                                    <div className="buttonContainer">
                                        <input 
                                            className="abtiaryButton" 
                                            value="Submit"
                                            type="submit" />
                                    </div>


                                </div>

                            </form>

                        </div>
                    </div>
                </OnePage>
            </Layout>
        </>     
    )
}

export default Contact;