import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Diamond Opticians"
      keywords={[
        `Diamond Opticians`,
        `glasses`,
        `sunglasses`,
        `Plaistow`,
        `NH`,
        `MA`,
      ]}
    />
    <div>
      <Img s
        fluid={data.headerGlasses.childImageSharp.fluid}
        alt="Diamond Opticians"
      />
      <LogoWrapper>
        <h1>Diamond Opticians</h1>
      </LogoWrapper>
    </div>
    <TextSection>
      <h1>Eyeglasses</h1>
      <p>Text goes here</p>
    </TextSection>
    <Img fluid={data.eyeGlasses.childImageSharp.fluid} alt="Eyeglasses" />
    <TextSection>
      <h1>Sunglasses</h1>
      <p>Text goes here</p>
    </TextSection>
    <Img fluid={data.headerSunglasses.childImageSharp.fluid} alt="Sunglasses" />
    <TextSection>
      <h1>Sports Glasses</h1>
      <p>Text goes here</p>
    </TextSection>
    <Img fluid={data.skiGoggles.childImageSharp.fluid} alt="Sports Glasses" />
    <TextSection>
      <h1>Contact</h1>
      <p>Text goes here</p>
    </TextSection>
    <Img fluid={data.showRoom.childImageSharp.fluid} alt="Show Room" />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    headerGlasses: file(relativePath: { regex: "/header-glasses/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eyeGlasses: file(relativePath: { regex: "/eyeglasses/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerSunglasses: file(relativePath: { regex: "/header-sunglasses/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    skiGoggles: file(relativePath: { regex: "/ski-goggles/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showRoom: file(relativePath: { regex: "/show1/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const LogoWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  text-align: right;
  width: 100vw;
  margin: auto;
  position: absolute;
  top: 150px;
  right: 0px;

  h1 {
    padding: 10px;
    margin-right: 30px;
    color: white;
    vertical-align:middle;
  }
`
const TextSection = styled.div`
  background: rebeccapurple;
  height: 200px;

  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
`
