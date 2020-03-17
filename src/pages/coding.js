import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

// Images and assets
import htmlLogo from '../images/html-logo.png'
import cssLogo from '../images/css3-logo.png'
import seekr from '../images/dpl-seeker.png'
import gatsbyIcon from '../images/gatsby-icon.png'
import railsIcon from '../images/rails.png'
import reactIcon from '../images/react.png'
import postgresLogo from '../images/postgres.png'

const CodingPage = () => {

    return (
        <Layout>
            <h1 align='center'>Coding</h1>

            <div styles={{  }}>
                <h3 align='center'>Projects</h3>
            </div>
            <Container>
                <StyledImage>
                    <img src={seekr} />
                </StyledImage>
            </Container>
            <div>
                <h3 align='center'>Skills and Platforms</h3>
            </div>
            <Container>
                <StyledImage>
                    <img src={railsIcon} />
                </StyledImage>
                <StyledImage>
                    <img src={reactIcon} />
                </StyledImage>
                <StyledImage>
                    <img src={gatsbyIcon} />
                </StyledImage>
                <StyledImage>
                    <img src={htmlLogo} />
                </StyledImage>
                <StyledImage>
                    <img src={cssLogo} />
                </StyledImage>
                <StyledImage>
                    <img src={postgresLogo} />
                </StyledImage>
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    display: Flex;
    flex-direction: row-responsive;
    flex-flow: for wrap;
    position: relative;

`

const StyledImage = styled.div`
    max-width: 200px;
    margin: 1em;
    /* border: 2px solid black; */
    display: flex;
    align-items: center;
    align-content: center;
`

export default CodingPage