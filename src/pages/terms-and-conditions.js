import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Parser from 'html-react-parser';

import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'

const TaC = (props) =>{

	const FetchMarkDown = useStaticQuery(graphql`
		 query TermsAndConditionsPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/terms-and-condition.md/" }) {
			    frontmatter {
			      author 
			      date
			      title
			    }
			    html
			}
		}
	`)

	const data = {...FetchMarkDown.markdownRemark};

	return(
	 	<>
	 		<Layout>
                 <Nav pathExt={props.path}/>

                    <Banner 
						titlePage={`<span>Terms</span><span>and</span><span>Conditions</span>`}
                    />
 
	 				<div className="container">
						<div id="terms-and-conditions-content">
							<div className="">
								{Parser(data.html)}
							</div>
						</div>
					</div>

	 		</Layout>
	 	</>
	)
}


export default TaC;