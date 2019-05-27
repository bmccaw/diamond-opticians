import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = () => (
  <header 
    style={{
      background: `rebeccapurple`,
      marginBottom: `0`,
      position: `fixed`,
      top: `0`,
      width: `100%`,
      zIndex: `1`,
      borderBottom: `solid white 1px`
    }}
  >
    <div
      style={{
        margin: `auto`,
        maxWidth: `100vw`,
        padding: `1.45rem 1.0875rem`,
        paddingBottom: `3rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <NavLink to="/#eyeglasses">Eyeglasses</NavLink>
      </h3>
      <h3 style={{ margin: 0 }}>
        <NavLink to="/#sunglasses">Sunglasses</NavLink>
      </h3>
      <h3 style={{ margin: 0 }}>
        <NavLink to="/#sportglasses">Sport Glasses</NavLink>
      </h3>
      <h3 style={{ margin: 0 }}>
        <NavLink to="/#contact">Contact</NavLink>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const NavLink = styled(Link)`
  color: white;
  text-align: center;
  text-decoration: none;
  position: relative;
  display: block;
  float: left;
  width: 25%;
  font-family: "Cinzel", serif;

  &:hover,
  &:active {
    background-color: black;
  }
`
