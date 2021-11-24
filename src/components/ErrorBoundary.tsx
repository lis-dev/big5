import React from 'react'

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="text-center text-bold text-4xl card p-10">
          Something went wrong. Try to reload this page.
        </h1>
      )
    }

    return this.props.children
  }
}

function logErrorToMyService(error: any, errorInfo: any) {
  console.error(error, errorInfo)
}
