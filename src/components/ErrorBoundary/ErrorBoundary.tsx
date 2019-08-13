import React from 'react';
import { IErrorBoundaryState } from '../../classes/IErrorBoundaryState';

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (<>
        <h5>Sorry, something went wrong.</h5>
        <h6>Please try again.</h6>
      </>
      );
    }
    return this.props.children;
  }
}

export { ErrorBoundary };

