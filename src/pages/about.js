import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'

// Images
import trevor from "../images/trevor.jpg"

const About = () => {
  return (
    <Layout>
      <SEO
        title="about me"
        description="professional musician, web developer, full-stack developer, photographer"
      />
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid",
          marginBottom: "3em",
        }}
      >
        <h1>About Me</h1>
      </div>
      <div style={{ maxWidth: "300px", float: "left", margin: "0 2em 0 1em" }}>
        <img src={trevor} alt="Trevor Watson with a Bass" />
      </div>
      <div style={{ margin: "0 4em 1em 4em" }}>
        <h3>
          I am passionate about learning new things and solving problems in a
          creative way.
        </h3>
        <p>
          I am a professional musician and web developer, budding photographer,
          wannabe writer/author, avid learner, and most importantly husband and
          father.
        </p>
        <p>
          My professional work at this point has taken me into a number of roles
          from customer service and management in service and retail industries,
          all the way to technical support and technical consulting in the
          software world. I am constantly on the search for the next challenge
          and the next topic to research. And this drive has led me to web
          development. I was looking for something that would allow me to
          continue to learn and grow, gain new skills and have the potential
          build amazing things.
        </p>
      </div>
    </Layout>
  )
}

export default About
