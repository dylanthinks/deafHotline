import React from "react"

import styled from "styled-components"

import Facebook from "../images/facebook2.svg"
import YouTube from "../images/youtube.svg"
import Instagram from "../images/instagram.svg"


const Logos = styled.div`
padding: 1rem;
> a {
  padding: 1rem;
}
`
const Logo = styled.img`
fill: purple;
transform: scale(1.25);
&:hover {
  fill: blue;
}
`

export default () => (
<Logos>
<a href="https://www.facebook.com/The-Deaf-Hotline-102241331236027/?ref=br_rs"><Logo src={Facebook} alt="Facebook Logo"/></a>
<a href="http://instagram.com/deafhotline"><Logo src={Instagram} alt="Instagram Logo"/></a>
<a href="https://www.youtube.com/channel/UCMHBAIHQZbOb0cO7UHfzL8w"><Logo src={YouTube} alt="YouTube Logo"/></a>
</Logos>
)