import React, { Component } from "react"

import Layout from "../components/layout"
import WocDV from "../images/wocDV.pdf"

class POC extends Component {
  render() {
    return (
      <Layout>
              <embed src={WocDV} type="application/pdf" width="100%" height="600px" alt="pdf by the women of color network for DV" />
      </Layout>
    )
  }
}

export default POC