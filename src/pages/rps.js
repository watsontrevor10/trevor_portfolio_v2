import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// Images
import rpsMain from "../images/rps-main.png"
import rpsGif from "../images/Rockpaperscissors.gif"

const Rps = () => {
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
          <h2>Rock Paper Scissors Game</h2>
        </div>
        <div class="prj-text-cont">
          <p>
            This is the classic Rock-Paper-Scissors game we all know and love.
            This was an app that I began building at DevPoint Labs while
            studying full-stack development, but it still had some work left to
            do and some bugs to squish, so I finished it up recently for fun and
            to practice with Javascript.
          </p>
          <span>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #React
            </a>
            {", "}
            <a
              href="https://react.semantic-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #Semantic-UI
            </a>
          </span>
        </div>
        
        {/* Link buttons */}
        <div class="flex-content">
          <a
            href="https://watson-rps-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div class="main-btn">Visit Site</div>
          </a>
          <a
            href="https://github.com/watsontrevor10/react-rock-paper-scissors"
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

        {/* Image gallery */}
        <div class="img-container">
          <img src={rpsMain} alt="rock-paper-scissors main page" />
          <img src={rpsGif} alt="rock-paper-scissors gif tour" />
        </div>
      </div>
    </Layout>
  )
}

export default Rps
