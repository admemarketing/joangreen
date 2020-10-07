import React from "react"
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/banner'
import FrontBook from '../../static/books/main_book.png'



const Order =  (props) =>{
    return(
        <>
            <Layout>
                <Nav/>
                <Banner titlePage={`<span>Order</span>`} />

                <section className="upper-main" id="main-upper-author">
                    <div className="grid-one-col">
                        <div className="grid-child" id="author-contents">
                            <img 
                                className="book-order-display" 
                                src={FrontBook} 
                                alt="book-display-order"
                            />

                            <button id="order-here-button">
                                <a href="https://peterjohnstonauthor.com/product/the-eagles-way/">Order Here</a>
                            </button>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Order;

