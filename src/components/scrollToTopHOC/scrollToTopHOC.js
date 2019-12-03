import React from "react"

const ScrollToTopHOC = WrappedComponent =>
  class ScrollTopOnMount extends React.Component {
    componentDidMount() {
      if (typeof document !== "undefined") {
        document.body.scrollTo(0, 0)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

export default ScrollToTopHOC
