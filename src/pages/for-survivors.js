import React from 'react';
import { render } from 'react-dom';

import Accordion from '../components/Accordion';
import Layout from "../components/layout";

function Survivors() {
  return (
    <Layout>
    <div>
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