import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Logos from "../components/logos"

const Footer = styled.footer`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
text-align: center;
width: 100%;
padding: 1rem;
color: white;
background: linear-gradient(90deg, #684BB6, #B11E43);
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
`

export default () => (
<Footer>
<div>
<Logos/>
<p>Phone: (855)-812-1001</p>
<p>Email: <a href="mailto:nationaldeafhotline@adwas.org">nationaldeafhotline@adwas.org</a></p>
</div>

<div>
<p>The National Domestic Violence<span>Hotline</span></p>
<p>1.800.799.SAFE(7233) * 1.800.787.3224 (TTY)</p>
<p>Some content on this website has been provided courtesy of The National Domestic Violence Hotline.</p>
<p><i>This Web site is funded through a grant from the Office for Victims of Crime, Office of Justice Programs, U.S. Department of Justice.  Neither the U.S. Department of Justice nor any of its components operate, control, are responsible for, or necessarily endorse, this Web site (including, without limitation, its content, technical infrastructure, and policies, and any services or tools provided).</i>
</p>
</div>

</Footer>
)