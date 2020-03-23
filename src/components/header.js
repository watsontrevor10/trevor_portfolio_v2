import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaBars } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3d3d3d`,
      marginBottom: `1.45rem`,
    }}
  >
    <FaBars
      style={{ color: "#f0f0f0", float: "left", size: "5em", margin: "2em" }}
    />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center" }}>
        <Link
          to="/"
          style={{
            color: `#f0f0f0`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
