import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaBars } from "react-icons/fa"
import Sidebar from "./sidebar"
import styled, { keyframes } from "styled-components"

const Header = ({ siteTitle }) => {
  const [showSidebar, setShowSidebar] = useState(false)

  const displaySidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div>
      <header
        style={{
          background: `#151616`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1.5em",
            left: "2em",
            cursor: "pointer",
          }}
        >
          <FaBars onClick={displaySidebar}></FaBars>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 0`,
          }}
        >
          <h1 style={{ margin: 0, textAlign: "center" }}>
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

// const fadeIn = keyframes`
//     from {
//       opacity: 0;
//     }

//     to {
//       opacity: .98;
//     }
// `

// const AppearSidebar = styled.div`
//   animation: ${fadeIn} .3s linear;
// `

export default Header
