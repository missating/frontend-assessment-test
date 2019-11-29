// third party libraries
import React from 'react';
import { withRouter } from 'react-router-dom';

// styless
import './NotFound.scss'

const NotFound = ({ history }) => (
  <div className="notfound-container">
    <h1> Are You Lost ? </h1>
    <h5> This page does not exist (404)</h5>
    <button onClick={() => history.push('/')} type="button">
      Return to Home Page
    </button>
  </div>
);

export default withRouter(NotFound);
