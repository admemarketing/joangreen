import React from 'react'
import {graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Nav from '../components/nav'
import BlogComponent from '../components/blog/blog-component'



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
                <Nav pathExt={props.path}/>
                <Banner titlePage={`<span>Blog</span>`}/>
                
                <div className="container"  id="blog-body-content-list">
                    <h1 className="heading-section">
                        Blog Contents
                    </h1>

                    <div className="container">

                    {
                        data.allMarkdownRemark.edges.map((edge , indx)=>{

                            if( edge.node.fields.slug != "privacy-policy" && edge.node.fields.slug != "terms-and-condition"  ){

                                return(
                                    <>
                                        <BlogComponent
                                            num={`0${indx + 1}`}
                                            title={`${edge.node.frontmatter.title}`}
                                            date={`${edge.node.frontmatter.date}`}
                                            content={`${edge.node.html}`}
                                            slugPost={`${edge.node.fields.slug}`}
                                        />
                                    </>
                                )
                             }
                          }
                       )
                    }

            
                    </div>
                </div>

            </Layout>
        </>
    ) 
}       

export default BlogPage;