import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"

import styled from "styled-components"


const NavMenu = styled.nav`
 /* padding: 1.5rem 1rem; */
 display: inline-flex;
 flex-direction: row;
 flex-wrap: wrap;

 text-transform: uppercase;
  font-size: .85rem;
  font-weight: 600;
  & ul li {
    display: inline-flex;
    flex-direction: row;
    color: white;
    list-style-type: none;
    padding: .5rem;
  }
`

export default () => (
  <NavMenu>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/get-support">Get Support</Link></li>
      <li><Link to="/domestic-violence">Domestic Violence</Link></li>
      <li><Link to="/community-intervention">Community Intervention</Link></li>
      <li><Link to="/healthy-relationships">Healthy Relationships</Link></li>
      <li><Link to="/resources">Resources</Link></li>
    </ul>
    </NavMenu>
)