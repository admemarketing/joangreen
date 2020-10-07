import React from 'react'
import {graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import OnePage from "../components/one-page"
import Nav from '../components/nav'



const BlogPage = (props)=>{


    const data = useStaticQuery(
        graphql`
            query{
                allMarkdownRemark{
                    edges{
                        node{
                            frontmatter{
                                title
                                date
                            }
                            fields{
                                slug
                            }
                            html
                        }
                    }
                }
            }
        `
    )


    return (
        <>
            <Layout>
                <OnePage>
                    <Nav pathExt={props.path}/>
                    <div className="home-page-apparel content-one-page">

                        <div class="content-wrapper">
                            <h1 className="blippo-heading">
                              Blog
                            </h1>
                            <p>
                            
                            </p>
                        </div>
                    </div>
                </OnePage>
            </Layout>
        </>
    ) 
}       

export default BlogPage;