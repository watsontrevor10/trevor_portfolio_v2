import styled from "styled-components"

export const TxtOverlay = styled.div`
  position: absolute;
  max-width: 350px;
  opacity: 0;
  transition: 0.4s linear;
`

export const ImgOverlay = styled.div`
  width: 100%;
  height: auto;
  opacity: 1;
  transition: 0.4s linear;
`

export const ImgCont = styled.div`
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



