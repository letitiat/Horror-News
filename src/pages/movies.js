import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Home from '../components/home';
import Nav from '../components/nav';
import Featured from '../components/featured';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout className="wrapper--black">
    <SEO title="Home" />
    <Nav />
    <Featured />
    <Home />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
