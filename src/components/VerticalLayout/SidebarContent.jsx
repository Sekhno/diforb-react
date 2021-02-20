import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import { withRouter } from "react-router-dom"

const SidebarContent = props => {

  return (
    <React.Fragment>
      
      Sidebar Content

    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter((SidebarContent))
