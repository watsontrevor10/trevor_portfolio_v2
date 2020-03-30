import React from "react"
import styled from "styled-components"

const Contact = () => {
  return (
    <form>
      <ContactContainer>
        <h2 style={{  }}>Contact Me</h2>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="text" name="email" placeholder="Email" />
        <Text name="message" placeholder="Your Message" />
      </ContactContainer>
      <Button type="submit" name="submit" value="Submit" />
    </form>
  )
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 2rem 0 1rem;
`

const Input = styled.input`
  margin: 0 0 0.5rem;
  box-sizing: border-box;
  border: .1rem solid;
  background-color: inherit;
  color: inherit;
`

const Text = styled.textarea`
  background-color: inherit;
  color: inherit;
  border: .1rem solid;
`

const Button = styled.input`
  background-color: inherit;
  color: inherit;
  border: .12rem solid;
  transition: .3s linear;

  &:hover {
    background-color: #e8e8e8;
    color: black;
    box-shadow: 1px 5px 5px black;
  }
`

export default Contact
