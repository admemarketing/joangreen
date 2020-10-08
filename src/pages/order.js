import React from "react"
import Layout from '../components/layout'
import Nav from '../components/nav'
import OnePage from "../components/one-page"
import MainBook from "../../static/books/main_book.png"


const Order =  (props) =>{
    return(
        <>
            <Layout>

                <OnePage>
                    <Nav pathExt={props.path}/>
                    <div className="home-page-apparel content-one-page">

                        <div class="content-wrapper">   
                            <h1 className="blippo-heading">
                               Order
                            </h1>

                            <div className="book-image-container-order">
                                <img src={MainBook}  alt="main_book"/>
                            </div>

                        </div>
                    </div>
                </OnePage>
           
            </Layout>
        </>
    )
}

export default Order;

