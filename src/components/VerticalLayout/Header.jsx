import PropTypes from 'prop-types'
import React, { useState } from "react"

import { connect } from "react-redux"

const Header = props => {
  
  return (
    <React.Fragment>
      <header id="page-topbar">
          Hedaer
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  
}

const mapStatetoProps = state => {
  const {
    
  } = state.Layout
  return {  }
}

export default connect(mapStatetoProps, {
  
})(Header)
