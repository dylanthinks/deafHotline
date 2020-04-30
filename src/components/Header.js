import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

import NavMenu from "../components/navmenu"
import Hands2 from "../images/handsLogo2.png"

const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-around;
background: #684BB6;
margin-bottom: 1.45rem;
padding: 2rem;
& a {
  text-decoration: none;
  color: white; 
  margin: 0;
}
  & a:hover {
   text-decoration: underline;
}
`


const Header = ({ siteTitle }) => (
  <Container>
      <h1>
        <Link to="/">
          {siteTitle}
          <img src={Hands2} alt="Deaf Hotline logo, two hands intertwined"/>
        </Link>
      </h1>
      <NavMenu />
    </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
