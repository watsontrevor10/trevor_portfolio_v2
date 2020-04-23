import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// Images
import seekrmain from "../images/seekr.png"
import seekrmanager from "../images/seekr-manager.png"
import seekrkanban from "../images/seekr-kanban.png"

const Seekr = () => {
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
            Devpoint Seekr is a tool to help with the complexity of the
            modern-day job search. We send in so many applications, and it can
            be difficult to keep track of everything. My team and I built this
            tool as part of DevPoint Labs curriculum to help job Seekr's keep
            track of their job applications. This was our final project, which
            we had about 3 weeks to complete the full-stack development of the
            product.
          </p>
          <span>
            <a
              href="https://rubyonrails.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #RubyonRails
            </a>
            {", "}
            <a
              href="https://www.postgresql.org/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #PostgreSQL
            </a>
            {", "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #React
            </a>
            {", "}
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #Sass
            </a>
            {", "}
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #Recharts
            </a>
          </span>
        </div>
        {/* Link buttons */}
        <div class="flex-content">
          <a
            href="https://github.com/watsontrevor10/dpl-seekr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div class="main-btn">GitHub</div>
          </a>
          <Link to="/about" class="styled-link">
            <div class="main-btn">Hire Me</div>
          </Link>
        </div>
        <div class="img-container">
          <img src={seekrmain} alt="DevPoint Seekr Main Page" />
          <img src={seekrkanban} alt="Seekr Kanban board" />
          <img src={seekrmanager} alt="Seekr job search manager" />
          <iframe
            title="Seekr Demo"
            width="100%"
            height="400em"
            src="https://www.youtube.com/embed/Dps7caZ1CaQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default Seekr
