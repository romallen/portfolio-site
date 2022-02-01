import React from "react"

import Layout from "../components/layout"
// import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
// import Skills from "../components/skills"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Portfolio" /> */}
    <Header></Header>
    <Work></Work>
    {/* <Skills></Skills> */}
    <Footer></Footer>
  </Layout>
)

export default IndexPage
