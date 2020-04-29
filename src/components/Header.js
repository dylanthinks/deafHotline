import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

import NavMenu from "../components/navmenu"

const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-around;
background: rebeccapurple;
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
