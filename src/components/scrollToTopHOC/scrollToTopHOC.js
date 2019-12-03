import React, { useEffect } from "react"

const ScrollToTopHOC = WrappedComponent =>
  class ScrollTopOnMount extends React.Component {
    componentDidMount() {
      window.focus()

      window.scrollTo(0, 0)
      // setTimeout(function() {
      //   window.scrollTo(0, 0)
      // }, 5)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

export default ScrollToTopHOC
