import React, { Component } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const Footer = styled.div`
max-width: 960;
background-color: lightgrey;
`

export default () => (
<Footer>
<p>
<i>This Web site is funded through a grant from the Office for Victims of Crime, Office of Justice Programs, U.S. Department of Justice.  Neither the U.S. Department of Justice nor any of its components operate, control, are responsible for, or necessarily endorse, this Web site (including, without limitation, its content, technical infrastructure, and policies, and any services or tools provided).
</i>
</p>
</Footer>
)