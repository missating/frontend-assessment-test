import React from 'react';

import Navbar from './components/Navbar'
import ErrorBoundary from './components/ErrorBoundary'
import Routes from './routes'

const App = () => (
  <div className="app-container">
    <Navbar />
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </div>
)

export default App;
