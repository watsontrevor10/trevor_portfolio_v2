import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Sidebar = props => {

  return (
    <SidebarContainer id="sideNav">
      <CloseButton onClick={props.displaySidebar}>&times;</CloseButton>
      <StyledLink to="/about">Hire Me</StyledLink>
      <StyledLink to="/coding">Web Dev</StyledLink>
      <StyledLink to="/photography">Photography</StyledLink>
      <StyledLink to="/writing">Writing</StyledLink>
      <StyledLink to="/music">Music</StyledLink>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  overflow-x: hidden;
  background-color: #151616;
  transition: margin-left 0.8s;
  opacity: 0.97;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 2em 1em 0 1.5em;
  color: inherit;
  display: block;
  transition: 0.3s;
  font-size: 25px;
  transition: 0.3s linear;

  &:hover {
    color: #666666;
  }
`

const CloseButton = styled.p`
  position: absolute;
  top: 0.2em;
  right: 0.3rem;
  font-size: 40px;
  margin-left: 1rem;
  text-decoration: none;
  color: inherit;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #aaaaaa;
  }
`

export default Sidebar
