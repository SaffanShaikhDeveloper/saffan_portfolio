// components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows fallback UI
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught Error:", error, errorInfo);
    this.setState({ errorInfo });
    // You can also send error logs to a service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white p-8 text-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
            <p className="text-sm mb-4">
              Try refreshing the page or coming back later.
            </p>
            <pre className="text-xs opacity-50 overflow-auto max-h-40">
              {this.state.errorInfo?.componentStack}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
