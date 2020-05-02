import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Logos from "../components/logos"

const Footer = styled.div`
display: flex;
justify-content: space-around;
text-align: right;
width: 100%;
padding: 1rem;
background-color: rgba(28, 85, 165, .1);
`

export default () => (
<Footer>
<Logos/>

<div style= {{ textAlign: 'left' }}>
<p>Phone: 1 (855) 812-1001</p>
<p>Email: nationaldeafhotline@adwas.org</p>
<p><i><def>DDBDD Definitions: Deaf, DeafBlind, DeafDisabled</def></i></p>
</div>

<div>
<img src="https://i2.wp.com/thedeafhotline.org/wp-content/uploads/2019/08/national-domestic-violence3-hotline-logo-e1565400202377-300x178.jpg?resize=300%2C178&ssl=1" alt="National Domestic Violence Hotline"/>
<p>Some content on this website has been provided courtesy of The National Domestic Violence Hotline.</p>
<p><i>This Web site is funded through a grant from the Office for Victims of Crime, Office of Justice Programs, U.S. Department of Justice.  Neither the U.S. Department of Justice nor any of its components operate, control, are responsible for, or necessarily endorse, this Web site (including, without limitation, its content, technical infrastructure, and policies, and any services or tools provided).</i>
</p>
</div>

</Footer>
)