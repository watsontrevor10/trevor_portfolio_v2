import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import styled from "styled-components"

// Images
import trevor from "../images/trevor.jpg"

const About = () => {
  return (
    <Layout>
      <SEO
        title="about me"
        description="professional musician, web developer, full-stack developer, photographer"
      />
      <div class="callout">
        <h3 class="callout-txt">
          I am passionate about learning new things and solving problems in
          creative ways.
        </h3>
      </div>
      <div style={{ padding: "1rem 2rem 0 2rem" }}>
        <div
          style={{ maxWidth: "250px", float: "left", padding: "0 1em 0 1em" }}
        >
          <img src={trevor} alt="Trevor Watson with a Bass" />
        </div>
        <div style={{ padding: "0 1em 1em .5em" }}>
          <p>
            I am a professional musician and freelance web developer, budding
            photographer, wannabe writer/author, avid learner, and most
            importantly husband and father.
          </p>
          <p>
            My professional work at this point has taken me into a number of
            roles from customer service and management in service and retail
            industries, all the way to technical support and technical
            consulting in the software world. I am constantly on the search for
            the next challenge and the next topic to research. And this drive
            has led me to web development. I was looking for something that
            would allow me to continue to learn and grow, gain new skills and
            have the potential build amazing things.
          </p>
          <p>
            I am available for hire for a variety of web development needs, drop
            me a line for more details.
          </p>
        </div>
        <LinkContainer>
          <a
            href="https://www.linkedin.com/in/trevorjwatson/"
            target="_blank"
            rel="noopener noreferrer"
            class="styled-link"
          >
            <div class="main-btn">LinkedIn</div>
          </a>
          <a
            href="https://github.com/watsontrevor10"
            target="_blank"
            rel="noopener noreferrer"
            class="styled-link"
          >
            <div class="main-btn">GitHub</div>
          </a>
          <Link to="/coding" class="styled-link">
            <div class="main-btn">Projects</div>
          </Link>
          <Link to="/myGear" class="styled-link">
            <div class="main-btn">My Gear</div>
          </Link>
        </LinkContainer>
        <div style={{}}>
          <Contact />
        </div>
      </div>
    </Layout>
  )
}

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1em;
  justify-content: center;
  padding: 0.25rem;
`

export default About
