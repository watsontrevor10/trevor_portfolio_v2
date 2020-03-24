import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

// Images
import seekrmain from "../images/seekr.png"
import seekrmanager from "../images/seekr-manager.png"
import seekrkanban from "../images/seekr-kanban.png"

const Seekr = () => {
  return (
    <Layout>
      <div>
        <Link to={"/coding"} style={{ float: 'right' }}>Back</Link>
      </div>
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid",
          marginBottom: "1em",
        }}
      >
        <h1>DevPoint Seekr</h1>
      </div>
      <TextContainer>
        <p>
          Devpoint Seekr is a tool to help with the complexity of the modern day
          job search. We send in so many applications, and it can be difficult
          to keep track of everything. My team and I built this tool as part of
          DevPoint Labs curriculum. This was our final project, which we had
          about 3 weeks to complete the full-stack development of the product.
        </p>
        <p>
          We used{" "}
          <a
            href="https://rubyonrails.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ruby on Rails
          </a>{" "}
          for the backend,{" "}
          <a
            href="https://www.postgresql.org/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PostgreSQL
          </a>{" "}
          for the database,{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React.js
          </a>{" "}
          for front-end with{" "}
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sass
          </a>{" "}
          for CSS design, and{" "}
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Recharts
          </a>{" "}
          for the graphs on the main page.
        </p>
      </TextContainer>
      <ImageContainer>
        <img src={seekrmain} />
        <img src={seekrkanban} />
        <img src={seekrmanager} />
        <iframe
          width="560"
          height="415"
          src="https://www.youtube.com/embed/Dps7caZ1CaQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ImageContainer>
    </Layout>
  )
}

const TextContainer = styled.div`
  max-width: 960px;
  text-align: center;
  margin: auto;
  padding: 15px;
`

const ImageContainer = styled.div`
  column-count: 2;
  column-gap: .5em;
  row-gap: .5em;
`

export default Seekr
