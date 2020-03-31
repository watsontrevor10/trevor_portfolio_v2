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
          This is version 2 of my portfolio page. I built this to expand my
          knowledge of Gatsby.js, styled components, CSS transitions and
          animations, and to showcase not just my development projects, but to
          show that I continue to work on my photography, music and writing as
          well.
        </p>
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
      >
        <a
          href="https://trevorwatson.me/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button>Visit Site</Button>
        </a>
      </div>
    </Layout>
  )
}

const Button = styled.div`
  border: 1px solid;
`

const Img = styled.img`
  box-shadow: 1px 2px 2px black;
`

export default TrevorWatson
