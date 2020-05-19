import React from "react"
import Layout from "../components/layout"

const MyStuff = () => {
  return (
    <Layout>
       <div>
            <Link
              to={"/about"}
              style={{ position: "absolute", top: "6.5em", right: "1em" }}
            >
              Back
            </Link>
          </div>
      <div class="center">
        <div style={{ marginTop: "3em" }}>
          <h1>My Tools</h1>
          <h3>Main Tools</h3>
          <ul>
            <li>2018 Mac Mini - Core i7, 16GB RAM</li>
            <li>2018 iPad Pro</li>
            <li>LG 34" Ultrawide Monitor</li>
            <li>Ultimate Hacking Keyboard</li>
            <li>Apple Magic Trackpad v1 (thinking about upgrading)</li>
            <li>Logi Trackball Mouse (been trying this out lately)</li>
            <li>Notion</li>
          </ul>
          <h3>Development</h3>
          <ul>
            <li>VisualStudio Code</li>
            <li>iTerm2</li>
            <li>Focus ToDo</li>
            <li>Firefox</li>
          </ul>
          <h3>Photography/Video</h3>
          <ul>
            <li>Sony A7III</li>
            <li>Zeiss 55mm 1.8 lens</li>
          </ul>
          <h3>Music</h3>
          <ul>
            <li>JBL Studio Monitors</li>
            <li>
              Behringer U-Phoria Audio Interfaces (I have two different kinds)
            </li>
            <li>MXL Condensor Microphones</li>
            <li>JBL Studio Monitors</li>
            <li>Akai Midi Controller</li>
            <li>Ibanez Roadstar II (1981)</li>
            <li>Ibanez Talman Short Scale Bass</li>
            <li>Gallien-Krueger MB112</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default MyStuff
