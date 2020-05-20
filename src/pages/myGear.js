import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const MyStuff = () => {
  return (
    <Layout>
      <div class="callout">
        <h1 class="callout-txt">My Gear</h1>
      </div>
      <div>
        <Link
          to={"/about"}
          style={{ position: "absolute", top: "12em", right: "2em" }}
        >
          Back
        </Link>
      </div>
      <div style={{ marginTop: "2em" }}>
        <ListCont>
          <List>
            <ListHead>Main Tools</ListHead>
            <ul>
              <li>2018 Mac Mini - Core i7, 16GB RAM</li>
              <li>2018 iPad Pro</li>
              <li>LG 34" Ultrawide Monitor</li>
              <li>Ultimate Hacking Keyboard</li>
              <li>Apple Magic Trackpad v1 (thinking about upgrading)</li>
              <li>Logi Trackball Mouse (been trying this out lately)</li>
              <li>Notion</li>
            </ul>
          </List>
          <List>
            <ListHead>Development</ListHead>
            <ul>
              <li>VisualStudio Code</li>
              <li>iTerm2</li>
              <li>Focus ToDo</li>
              <li>Firefox</li>
            </ul>
          </List>

          <List>
            <ListHead>Music</ListHead>
            <ul>
              <li>JBL Studio Monitors</li>
              <li>
                Behringer U-Phoria Audio Interfaces (I have two different kinds)
              </li>
              <li>MXL Condensor Microphones</li>
              <li>JBL Studio Monitors</li>
              <li>Akai LPK-25 Midi Controller</li>
              <li>Ibanez Roadstar II (1981)</li>
              <li>Ibanez Talman Short Scale Bass</li>
              <li>Gallien-Krueger MB112</li>
            </ul>
          </List>
          <List>
            <ListHead>Photography/Video</ListHead>
            <ul>
              <li>Sony A7III</li>
              <li>Zeiss 55mm 1.8 lens</li>
            </ul>
          </List>
        </ListCont>
      </div>
    </Layout>
  )
}

const ListCont = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  column-gap: 5em;
  margin-bottom: 2em;
`

const List = styled.div`
  width: 450px;
  margin-top: 2em;
  border: 2px black solid;
  padding: 1em;
  box-shadow: 1px 2px 2px black;
`

const ListHead = styled.h3`
  text-align: center;
`

export default MyStuff
