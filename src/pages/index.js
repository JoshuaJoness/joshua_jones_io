import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import About from "../components/About"
import CalorieCam from "../components/CalorieCam"
import ZenChat from "../components/ZenChat"
import Contact from "../components/Contact"

const IndexPage = () => {
  const [windowWidth, setWindowWidth] = useState(Infinity)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setWindowWidth(window.visualViewport.width)
  }, [typeof window !== "undefined" ? window.visualViewport.width : null])

  useEffect(() => {
    if (windowWidth <= 870) setMobile(true)
  }, [windowWidth])

  return (
    <Layout>
      <Seo title="Home" />
      <div
        id="home"
        className="image"
        style={mobile ? { backgroundPosition: "unset" } : {}}
      />
      <About mobile={mobile} />
      <CalorieCam mobile={mobile} />
      <ZenChat mobile={mobile} />
      <div className="imageTwo" />
      <Contact mobile={mobile} />
    </Layout>
  )
}

export default IndexPage
