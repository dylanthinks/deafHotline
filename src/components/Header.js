import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

import NavMenu from "../components/navmenu"
import Hands2 from "../images/handsLogo2.png"

const Container = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
background: linear-gradient(45deg, #684BB6, #B11E43);
& a {
  text-decoration: none;
  color: white; 
}
  & a:hover {
   text-decoration: underline;
}
`

const Logo = styled.img`
  margin: 0 auto;
  padding: 1rem;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
      <h1>
        <Link to="/">
          {/* siteTitle */}
          <Logo src={Hands2} alt="Deaf Hotline logo, two hands intertwined"/>
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
