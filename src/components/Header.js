import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

import NavMenu from "../components/navmenu"
import DeafHotlineLogo from "../images/DeafHotlineLogo.png"

const Container = styled.header`
display: flex;
align-items: center;
padding: 1rem;
background: linear-gradient(45deg, #684BB6, #B11E43);
max-height: 20%;
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
  max-width: 75%;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
      <h1>
        <Link to="/">
          {/* siteTitle */}
          <Logo src={DeafHotlineLogo} alt="Deaf Hotline logo, two hands intertwined"
            fluid={{
              sizes: "(width: 150px) calc(100vw - 20px), 1200px"
            }}
          />
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
