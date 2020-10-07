import React from 'react'
import Layout from '../components/layout'
import Inputs from "../components/Inputs/inputs"
import Nav from '../components/nav'
import Banner from '../components/banner'


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

		 		<Nav pathExt={props.path}/>
		 		<Banner titlePage={`<span>Contact</span>`}/>

                <main className="flexMainContainer">
                    <div className="flex-container-fx">

                            <p className="contactMessage">
                                Hello! Are you having a good day? Anyway, if you have any concerns or you just want to 
                                share something, please feel free to drop me a line. I would love to hear anything from you.
                            </p>

                            <form 
                                onSubmit={OnSubmitForm}
                                action="https://formspree.io/xvopdpny"
                                method="POST">

                            <div className="columns" id="form-wrapper">
                                <div className="column is-half">
                            
                                    <Inputs 
                                        name="fullname" 
                                        type="text" />

                                    <Inputs
                                        name="phone" 
                                        type="text" />

                                </div>

                                <div className="column is-half">

                                    <Inputs 
                                        name="email"
                                        type="email" />

                                    <Inputs 
                                        name="address" 
                                        type="text" />

                                </div>
                            </div>

                            <div className="columns">
                                <div className="column is-full" id="textAreaContainer">
                                    <label> Message	</label>
                                    <textarea type="text" name='message' 
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
                            </div>

                        </form>


    
                    </div>
                </main>

		 	</Layout>
        </>
    )
}

export default Contact;