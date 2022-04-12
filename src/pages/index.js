import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" /> 
    <Header></Header>
    <Skills></Skills>
    <Work></Work>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
