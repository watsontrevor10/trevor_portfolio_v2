import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

// Images
import tyqcolor from "../images/tyqcolor.png"
import tyqdrawings from "../images/tyqDrawings.png"
import tyqabout from "../images/tyqAbout.png"

const TyQ = () => {
  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid",
          marginBottom: "1em",
        }}
      >
        <Link
          to={"/coding"}
          style={{ position: "absolute", top: "6.5em", right: "1em" }}
        >
          Back
        </Link>
        <h2>Ty Q. Watson Coloring</h2>
      </div>
      <TextContainer>
        <p>
          Ty Watson wanted a simple website where he could market all
          of his coloring books and grow his business. This was a fun site to
          build, I got to use some of my photo editing skills, used Styled
          Components for CSS and also this was my first Gatsby project.
        </p>
      </TextContainer>
      <ImageContainer>
        <img src={tyqcolor} alt="Tyqcolor.com main page" />
        <img src={tyqabout} alt="tyqcolor.com about page" />
        <img src={tyqdrawings} alt="tyqcolor.com drawings" />
      </ImageContainer>
      <div
        style={{
          textAlign: "center",
          maxWidth: "10rem",
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

export default TyQ
