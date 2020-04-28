import React, { Component } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const Footer = styled.div`
width: 100%;
padding: 1rem;
background-color: lightgrey;
`

export default () => (
<Footer>
<span>Phone: 1 (855) 812-1001</span>
<p>Email: nationaldeafhotline@adwas.org</p>
<p><i><def>DDBDD Definitions: Deaf, DeafBlind, DeafDisabled</def></i></p>
<p>Some content on this website has been provided courtesy of The National Domestic Violence Hotline.</p>
<img src="https://i2.wp.com/thedeafhotline.org/wp-content/uploads/2019/08/national-domestic-violence3-hotline-logo-e1565400202377-300x178.jpg?resize=300%2C178&ssl=1"/>
<p>
<i>This Web site is funded through a grant from the Office for Victims of Crime, Office of Justice Programs, U.S. Department of Justice.  Neither the U.S. Department of Justice nor any of its components operate, control, are responsible for, or necessarily endorse, this Web site (including, without limitation, its content, technical infrastructure, and policies, and any services or tools provided).
</i>
</p>
</Footer>
)