import PropTypes from 'prop-types'
import React, { Component } from "react"

import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
// import {
//   changeLayout,
//   changeSidebarTheme,
//   changeSidebarType,
//   changeTopbarTheme,
//   changeLayoutWidth,
// } from "../../store/actions"

// Layout Related Components
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

class Layout extends Component {
  constructor(props) {
    
  }

  

  componentDidMount() {
    
  }
  

  render() {
    return (
      <React.Fragment>
        

        <div id="layout-wrapper">
          <Header />
          <Sidebar/>
          <div className="main-content">{this.props.children}</div>
          <Footer />
        </div>
        
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  
}

const mapStatetoProps = state => {
  return {
    ...state.Layout,
  }
}
export default connect(mapStatetoProps, {
  
})(withRouter(Layout))
