import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"



const Sidebar = props => {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        Sidebar menu
      </div>
    </React.Fragment>
  )
}

Sidebar.propTypes = {
  type: PropTypes.string,
}

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  }
}
export default connect(
  mapStatetoProps,
  {}
)(withRouter(Sidebar))
