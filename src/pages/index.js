import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import OnePage from "../components/one-page"


const IndexPage = (props) => (
  <Layout>
      <OnePage>
        <Nav pathExt={props.path}/>
          <div className="home-page-apparel content-one-page">

              <div class="content-wrapper">
                <h1 className="blippo-heading">
                    Welcome Message
                </h1>
                <p>
                  Lorem Ipsum is simply dummy
                  text of the printing and 
                  typesetting industry. Lorem 
                  Ipsum has been the industry's 
                  standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of 
                  type and scrambled it to make a type specimen
                  book. It has survived not only five centuries,
                </p>
              </div>
          </div>
      </OnePage>
  </Layout>
)

export default IndexPage