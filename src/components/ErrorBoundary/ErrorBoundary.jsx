import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }

    componentDidCatch(Error, errorInfo) {
        console.error("Feature failed to load:", Error, errorInfo);
    }

    handleGoHome = () => {
        window.location.href = "/";
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h1>Oops! Something went wrong.</h1>
                    <p>We couldn't load this feature. Please try again later.</p>
                    <button onClick={this.handleGoHome}>Go to Home</button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;