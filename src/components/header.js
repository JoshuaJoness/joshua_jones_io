import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [windowWidth, setWindowWidth] = useState(Infinity)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setWindowWidth(window.visualViewport.width)
  }, [typeof window !== "undefined" ? window.visualViewport.width : null])

  useEffect(() => {
    if (windowWidth <= 870) setMobile(true)
  }, [windowWidth])

  return mobile ? (
    <div className="containerMobile">
      <a>
        <Link href="#home">
          {/* <FontAwesomeIcon icon={faHome} style={{ fontSize: 30, color: 'white' }} /> */}
          <span className="nav-link">HOME</span>
        </Link>
      </a>
      <a>
        <Link href="#code">
          {/* <FontAwesomeIcon icon={faCode}  /> */}
          <span className="nav-link">CODE</span>
        </Link>
      </a>
      <a>
        <Link href="#contact">
          {/* <FontAwesomeIcon icon={faEnvelopeOpen} style={{ fontSize: 30, color: 'white' }} /> */}
          <span className="nav-link">CONTACT</span>
        </Link>
      </a>
    </div>
  ) : (
    <ul className="container">
      <li>
        <Link href="/" className="joshuaJones">
          Joshua Jones
        </Link>
      </li>
      <li
        style={{
          alignSelf: "center",
          width: "25vw",
          display: "flex",
          justifyContent: "space-between",
          marginRight: 200,
        }}
      >
        <li>
          <Link href="#about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link href="#code" className="link">
            Code
          </Link>
        </li>
        <li>
          <Link href="#contact" className="link">
            Contact
          </Link>
        </li>
      </li>
    </ul>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
