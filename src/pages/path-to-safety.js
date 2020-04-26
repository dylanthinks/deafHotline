import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Tabs from "../components/tabs"
require('../components/layout.css');

class Path extends Component {
  render() {
    return (
      <Layout>
      <h1>Path to Safety</h1>
      <h2>
      What is a safety plan?
      </h2>
      <p>
      A safety plan is a personalized, practical plan that includes ways to remain safe while in a relationship, planning to leave, or after you leave. Safety planning involves how to cope with emotions, tell friends and family about the abuse, take legal action and more.
      At the Deaf Hotline we safety plan with victims, friends and family members — anyone who is concerned about their own safety or the safety of someone else.
      A good safety plan will have all of the vital information you need and be tailored to your unique situation, and will help walk you through different scenarios.
      Although some of the things that you outline in your safety plan may seem obvious, it’s important to remember that in moments of crisis your brain doesn’t function the same way as when you are calm. When adrenaline is pumping through your veins, it can be hard to think clearly or make logical decisions about your safety. Having a safety plan laid out in advance can help you to protect yourself in those stressful moments.
      </p>
      
      <h2>Types of Safety Planning</h2>
      <Tabs>
        <div label="Safety While Living With An Abusive Partner">
          See ya later
        </div>
        <div label="Safety Planning With Children">
          After a while
        </div>
        <div label="Safety Planning With Pets">
          Nothing here
        </div>
        <div label="Safety Planning During Pregnancy">
          Nothing here
        </div>
        <div label="Emotional Safety Planning">
          Nothing here
        </div>
      </Tabs>

      <h2>Leaving a Relationship</h2>
      <Tabs>
        <div label="Preparing to Leave">
          See ya later
        </div>
        <div label="When You Leave">
          After a while
        </div>
        <div label="After You Leave">
          Nothing here
        </div>
      </Tabs>

      <h2>Legal Information</h2>
      <Tabs>
        <div label="Restraining Orders / Protective Orders">
          See ya later
        </div>
        <div label="Calling 911">
          After a while
        </div>
      </Tabs>

      <Link to="/">Home</Link>
      </Layout>
    )
  }
}

export default Path