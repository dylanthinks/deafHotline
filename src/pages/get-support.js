import React, { Component } from "react" 
import { Link } from "gatsby"

import Layout from "../components/layout"

class GetSupport extends Component {
  render() {
    return (
      <Layout>
      <h1>
      Get Support
      </h1>
      <p>
      Advocates who are Deaf are available 24/7 through the Deaf Hotline by video phone at 1-855-812-1001 or email (nationaldeafhotline@adwas.org).

      Deaf advocates are able to provide culturally-sensitive crisis intervention, education, information and referrals for Deaf callers.
      </p>
        <Link to="/">Home</Link>
      </Layout>
    )
  }
}

export default GetSupport 