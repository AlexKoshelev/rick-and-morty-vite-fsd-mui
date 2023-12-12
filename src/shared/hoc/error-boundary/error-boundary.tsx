import { Component, ErrorInfo, PropsWithChildren, ReactNode } from "react";

class ErrorBoundary<T extends PropsWithChildren> extends Component<T> {
  state: {
    hasError: boolean;
  };
  constructor(props: T) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error: Error) {
    console.log(error.message);
    return {
      hasError: true,
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("error", error.message);
    console.error("errorInfo", errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return "Что-то пошло не так";
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
