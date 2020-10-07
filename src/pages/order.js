import React from "react"
import Layout from '../components/layout'
import Nav from '../components/nav'
import OnePage from "../components/one-page"


const Order =  (props) =>{
    return(
        <>
            <Layout>

                <OnePage>
                    <Nav pathExt={props.path}/>

                    <div className="home-page-apparel content-one-page">

                        <div class="content-wrapper"> 
                            <h1 className="blippo-heading">
                              Blog
                            </h1>
                            <p></p>
                        </div>
                    </div>
                </OnePage>
           
            </Layout>
        </>
    )
}

export default Order;

