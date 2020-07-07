import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

// Images
import trevormain from "../images/trevor-main-page.png"
import trevorwiting from "../images/trevor-writing.png"
import trevorcoding from "../images/trevor-coding.png"
import seekr from "../images/seekr-project.png"

const TrevorWatson = () => {
  return (
    <Layout>
      <div class="center">
        <div
          style={{
            textAlign: "center",
            borderBottom: "1px solid",
            marginBottom: "1em",
          }}
        >
          <div>
            <Link
              to={"/coding"}
              style={{ position: "absolute", top: "6.5em", right: "1em" }}
            >
              Back
            </Link>
          </div>
          <h2>Trevor Watson Portfolio</h2>
        </div>
        <div class="prj-text-cont">
          <p>
            This is version 2 of my portfolio page. I built this as a way to
            show the diversity of interests I have through now only the design
            of the site but the content as well.
          </p>
          <p>
            I wanted to expand my knowledge of GraphQL, custom CSS, and give my
            portfolio a more polished and professional look. This site
            represents not just my expanding knowledge of coding and design, but
            the variety of interests that I have, and gives me one place to
            showcase those interests.
          </p>
          <span>
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #Gatsby
            </a>
            {", "}
            <a
              href="https://www.postgresql.org/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #React
            </a>
            {", "}
            <a
              href="https://styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #StyledComponents
            </a>
            {", "}
            <a
              href="https://graphql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #GraphQL
            </a>
          </span>
        </div>
        <div class="flex-content">
          <a
            href="https://trevorwatson.me/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div class="main-btn">Visit Site</div>
          </a>
          <Link to="/about" class="styled-link">
            <div class="main-btn">Hire Me</div>
          </Link>
        </div>
        <div class="img-container">
          <Img src={trevormain} alt="Trevor Watson main page" />
          <Img src={trevorwiting} alt="Trevor Watson writing blog page" />
          <Img src={trevorcoding} alt="Trevor Watson web devlepment projects" />
          <Img src={seekr} alt="DevPoint Seekr full-stack job search tool" />
        </div>
        <div
          style={{
            textAlign: "center",
            maxWidth: "200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></div>
      </div>
    </Layout>
  )
}

const Img = styled.img`
  box-shadow: 1px 2px 2px black;
`

export default TrevorWatson
