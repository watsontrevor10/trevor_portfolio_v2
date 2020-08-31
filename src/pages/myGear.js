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
              <li>
                <a
                  href="https://amzn.to/3jlOYSP"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  2018 Mac Mini - Core i7, 16GB RAM
                </a>
              </li>
              <li>2018 iPad Pro</li>
              <li>
                <a
                  href="https://amzn.to/3gEG2Gv"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  LG 34" Ultrawide Monitor
                </a>
              </li>
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
              <li>Chrome</li>
            </ul>
          </List>

          <List>
            <ListHead>Music</ListHead>
            <ul>
              <li>JBL Studio Monitors</li>
              <li>
                <a
                  href="https://amzn.to/3gD4sjB"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Behringer U-Phoria UMC22
                </a>
              </li>
              <li>
                <a
                  href="https://amzn.to/3gGhz3o"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Behringer U-Phoria 404HD
                </a>
              </li>
              <li>MXL Condensor Microphones</li>
              <li>
                <a
                  href="https://amzn.to/3hFGdm5"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Akai LPK-25 Midi Controller
                </a>
              </li>
              <li>Ibanez Roadstar II (1981)</li>
              <li>Ibanez Talman Short Scale Bass</li>
              <li>
                <a
                  href="https://amzn.to/34ILJk7"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Gallien-Krueger MB112
                </a>
              </li>
              <li>
                <a
                  href="https://amzn.to/3hQyQsl"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Electro-Harmonix Big Bass Muff
                </a>
              </li>
              <li>
                <a
                  href="https://amzn.to/34LqONt"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Korg Pitch Black Tuner
                </a>
              </li>
              <li>
                <a
                  href="https://amzn.to/3b2XBPl"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Ditto Looper
                </a>
              </li>
              <li>MuseScore</li>
            </ul>
          </List>
          <List>
            <ListHead>Photography/Video</ListHead>
            <ul>
              <li>
                <a
                  href="https://www.amazon.com/gp/product/B07B43WPVK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07B43WPVK&linkCode=as2&tag=watsoncreat06-20&linkId=1e35b41e1156503288c90114a88087d5"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Sony A7III
                </a>
              </li>
              <li>
                <a
                  href="https://amzn.to/32yzQe1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Zeiss 55mm 1.8 lens
                </a>
              </li>
              <li>Sony 24-70mm F3.5-5.6 kit lens</li>
              <li>
                <a
                  href="https://amzn.to/2EDpS2W"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Takstar Shotgun Mic
                </a>
              </li>
              <li>Adobe Lightroom</li>
              <li>Adobe Photoshop</li>
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
