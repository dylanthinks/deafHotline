import React from 'react';
// import { render } from 'react-dom';

import Accordion from '../components/Accordion';
import Layout from "../components/layout";

function Survivors() {
  return (
    <Layout>
    <div>
    <h1>Finding Closure After Abuse</h1>
    <p>Moving on after any breakup is challenging, but healing after an abusive relationship can be especially difficult. All breakups may have their aftermath of sadness and loss, but for someone transitioning from victim to survivor, the fallout may include continued harassment or attacks. The resulting ongoing mental trauma and emotional stress can make a survivor question, <blockquote>“Was leaving really worth it?” YES. Yes, leaving is worth it.</blockquote>
    Why is moving on after abuse so difficult? Abuse is rooted in power and control, and an abusive partner holds that power by minimizing their victim’s self-esteem and breaking their spirit. If you’re leaving an abusive relationship, rebuilding your life can be a hard process, but with time and space, finding closure and peace is possible. A violence-free life is waiting, and you are so very worth it.</p>
      <h1>Accordion Demo</h1>
      <Accordion>
        <div label='Test'>
          <p>
            <strong>Common Name:</strong> alligator
          </p>
          <p>
            <strong>Common Name:</strong> your face
          </p>
        </div>
        <div label='test 2'>
        <p>
          <strong>common name:</strong> Raekwon
        </p>
        </div>
      </Accordion>
    </div>
    </Layout>
  );
}

export default Survivors