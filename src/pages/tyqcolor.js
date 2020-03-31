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
      <div class="prj-text-cont">
        <p>
          Ty Watson wanted a simple website where he could market all
          of his coloring books and grow his business. This was a fun site to
          build, I got to use some of my photo editing skills, used Styled
          Components for CSS and also this was my first Gatsby project.
        </p>
      </div>
      <div class="img-container">
        <img src={tyqcolor} alt="Tyqcolor.com main page" />
        <img src={tyqabout} alt="tyqcolor.com about page" />
        <img src={tyqdrawings} alt="tyqcolor.com drawings" />
      </div>
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
          <div class='main-btn'>Visit Site</div>
        </a>
      </div>
    </Layout>
  )
}

export default TyQ
