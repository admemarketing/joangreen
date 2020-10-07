import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import OnePage from "../components/one-page"


const IndexPage = (props) => (
  <Layout>
      <Nav pathExt={props.path}/>
      <OnePage
        
      />
  </Layout>
)

export default IndexPage