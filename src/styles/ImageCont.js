import styled from "styled-components"
import ImgOverlay from "./ImgOverlay"
import TxtOverlay from "./TxtOverlay"

export const ImageCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover ${ImgOverlay} {
    opacity: 0.1;
  }

  &:hover ${TxtOverlay} {
    opacity: 1;
  }
`
