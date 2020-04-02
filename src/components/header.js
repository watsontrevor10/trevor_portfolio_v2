import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaBars } from "react-icons/fa"
import Sidebar from "./sidebar"

const Header = ({ siteTitle }) => {
  const [showSidebar, setShowSidebar] = useState(false)

  const displaySidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div>
      <header
        style={{
          background: `#262626`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1.8em",
            left: "3em",
            cursor: "pointer",
          }}
        >
          <FaBars onClick={displaySidebar}></FaBars>
        </div>
        <div
          style={{
            marginLeft: "6rem",
            maxWidth: 300,
            padding: `1rem 0`,
          }}
        >
          <h1 style={{ margin: 0, textAlign: "left" }}>
            <Link
              to="/"
              style={{
                color: `#e8e8e8`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
      </header>
      {showSidebar ? <Sidebar displaySidebar={displaySidebar} /> : ""}
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
