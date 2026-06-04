import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="text-white text-center py-20 px-4">
            <h2 className="text-2xl font-bold text-red-500 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-400">
              This section failed to load. Try refreshing the page.
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
