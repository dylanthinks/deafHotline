import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from "styled-components"


const NavMenu = styled.div`
  margin: 0 auto;
  max-width: 95vw;
  padding: 1.45rem 1.0875rem;
  & ul li {
    color: white;
    list-style-type: none;
  }
`

export default () => (
  <NavMenu>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    </NavMenu>
)