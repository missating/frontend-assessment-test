import React from 'react'

import './ErrorBoundary.scss'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    const {
      state: {
        hasError,
      },
      props: {
        children,
      },
    } = this;
    if (hasError) {
      return (
        <div className="errorboundary-container">
          <div className="errorboundary-container__content">
            <h1>500</h1>
            <p>Internal server error</p>
            <p>We are working on creating something better...</p>
            <button type="button" onClick={() => window.location.reload()}>Refresh</button>
          </div>

        </div>
      )
    }

    return children;
  }
}

export default ErrorBoundary
