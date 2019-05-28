import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import Map from "../components/map"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]', {
    header: "header",
  })
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Diamond Opticians"
      keywords={[
        `diamond opticians`,
        `glasses`,
        `sunglasses`,
        `plaistow`,
        `nh`,
        `ma`,
      ]}
    />
    <div>
      <Img
        fluid={data.headerGlasses.childImageSharp.fluid}
        alt="Diamond Opticians"
      />
      <LogoWrapper>
        <h1>Diamond Opticians</h1>
      </LogoWrapper>
    </div>
    <div style={{ position: `relative`, height: `860px` }}>
      <TextSection>
        <TextHead id="eyeglasses">Eyeglasses</TextHead>
        <TextContent>
          Amet pariatur elit consequat elit nulla non commodo id irure
          exercitation. Esse voluptate excepteur sit culpa est nisi eu in velit
          velit do ad magna. Tempor ut excepteur adipisicing nostrud consectetur
          labore nostrud. Proident consectetur ullamco non cupidatat.
        </TextContent>
      </TextSection>
      <BackgroundImage
        css={{ top: 0, left: 0, right: 0, bottom: 0 }}
        style={{
          position: `absolute`,
          backgroundAttachment: `fixed`,
          zIndex: `-2`,
        }}
        fluid={data.eyeGlasses.childImageSharp.fluid}
        alt="Eyeglasses"
      />
    </div>
    <div style={{ position: `relative`, height: `860px` }}>
      <TextSection id="sunglasses">
        <TextHead>Sunglasses</TextHead>
        <TextContent>
          Velit velit nostrud culpa pariatur esse adipisicing pariatur. Ipsum
          consequat nostrud proident mollit do sit proident enim. Duis laborum
          ex commodo cupidatat veniam aute anim.
        </TextContent>
      </TextSection>
      <BackgroundImage
        css={{ top: 0, left: 0, right: 0, bottom: 0 }}
        style={{
          position: `absolute`,
          backgroundAttachment: `fixed`,
          zIndex: `-2`,
        }}
        fluid={data.headerSunglasses.childImageSharp.fluid}
        alt="Sunglasses"
      />
    </div>
    <div style={{ position: `relative`, height: `860px` }}>
      <TextSection>
        <TextHead id="sportglasses">Sports Glasses</TextHead>
        <TextContent>
          Aute cupidatat nulla occaecat labore velit. Magna commodo eu nostrud
          commodo in deserunt. Sit quis ad minim sit consectetur exercitation in
          labore veniam anim.
        </TextContent>
      </TextSection>
      <BackgroundImage
        css={{ top: 0, left: 0, right: 0, bottom: 0 }}
        style={{
          position: `absolute`,
          backgroundAttachment: `fixed`,
          zIndex: `-2`,
        }}
        fluid={data.skiGoggles.childImageSharp.fluid}
        alt="Sports Glasses"
      />
    </div>
    <div style={{ position: `relative`, height: `860px` }}>
      <TextSection id="contact">
        <TextHead>Contact</TextHead>
        <TextContent style={{ fontSize: `15px` }}>
          HOURS: M, T, TH, F 9:30-5:30 Wednesday-CLOSED Sat 9:30-12:30
          <br />
          PHONE: <a href="tel:603-382-8242">603-382-8242</a>
          <br />
          E-MAIL:{" "}
          <a href="mailto:diamond.opticians@gmail.com">
            diamond.opticians@gmail.com
          </a>
          <br />
          ADDRESS: 23 Plaistow Road (Route 125) Plaistow, NH 03865-0538
        </TextContent>
      </TextSection>
      <BackgroundImage
        css={{ top: 0, left: 0, right: 0, bottom: 0 }}
        style={{
          position: `absolute`,
          backgroundAttachment: `fixed`,
          zIndex: `-2`,
        }}
        fluid={data.showRoom.childImageSharp.fluid}
        alt="Show Room"
      />
    </div>
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
    margin-bottom:0px;
    line-height: 100px;
    font-family: "Cinzel", serif;
  }
`
const TextSection = styled.div`
  background: rebeccapurple;
  height: auto;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 70px 1fr;
`
const TextHead = styled.h1`
  text-align: center;
  color: white;
  padding: 10px;
  font-family: "Cinzel", serif;
  grid-column: 1 / span 2;
`
const TextContent = styled.p`
  padding: 10px;
  color: white;
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;

  a {
    color: white;
  }
`
