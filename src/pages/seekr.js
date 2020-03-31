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
        <h2>DevPoint Seekr</h2>
      </div>
      <div class="prj-text-cont">
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
      </div>
      <div class="img-container">
        <img src={seekrmain} alt="DevPoint Seekr Main Page" />
        <img src={seekrkanban} alt="Seekr Kanban board" />
        <img src={seekrmanager} alt="Seekr job search manager" />
        <iframe
          width="100%"
          height="480px"
          src="https://www.youtube.com/embed/Dps7caZ1CaQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <a
        href="https://github.com/watsontrevor10/dpl-seekr"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div class="main-btn">GitHub</div>
      </a>
    </Layout>
  )
}

export default Seekr
