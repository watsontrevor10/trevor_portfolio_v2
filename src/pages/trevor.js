import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

// Images
import trevormain from "../images/trevor-main-page.png"
import trevorwiting from "../images/trevor-writing.png"
import trevorcoding from "../images/trevor-coding.png"

const TrevorWatson = () => {
  return (
    <Layout>
      <div>
        <Link to={"/coding"} style={{ float: "right" }}>
          Back
        </Link>
      </div>
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid",
          marginBottom: "1em",
        }}
      >
        <h1>Ty Q. Watson Coloring Books</h1>
      </div>
      <TextContainer>
        <p>
          This is version 2 of my portfolio page. I built this to expand my
          knowledge of Gatsby.js, styled components, CSS transitions and
          animations, and to showcase not just my development projects, but to
          show that I continue to work on my photography, music and writing as
          well.
        </p>
      </TextContainer>
      <ImageContainer>
        <Img src={trevormain} alt="Trevor Watson main page" />
        <Img src={trevorwiting} alt="Trevor Watson writing blog page" />
        <Img src={trevorcoding} alt="Trevor Watson web devlepment projects" />
      </ImageContainer>
      <div
        style={{
          textAlign: "center",
          maxWidth: "200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <a
          href="https://tyqcolor.com/"
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

const TextContainer = styled.div`
  max-width: 960px;
  text-align: center;
  margin: auto;
  padding: 15px;
`

const ImageContainer = styled.div`
  column-count: 2;
  column-gap: 0.5em;
  row-gap: 0.5em;
`

export default TrevorWatson
