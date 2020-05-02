import React, { Component } from "react"

import Layout from "../components/layout"
import Accordion from "../components/Accordion"

class Resources extends Component {
  render() {
    return (
      <Layout>
       <Accordion>
         <div label="Abuse"></div>
         <div label="Anxiety / Stress"></div>
         <div label="Bullying"></div>
         <div label="Depression"></div>
         <div label="Eating / Body Image"></div>
         <div label="Gender / Sexual Identity"></div>
         <div label="General"></div>
         <div label="Grief"></div>
         <div label="Isolation / Loneliness"></div>
         <div label="Relationships"></div>
         <div label="Self-Harm"></div>
         <div label="Substance Use"></div>
         <div label="Suicide"></div>
       </Accordion>
      </Layout>
    )
  }
}

export default Resources