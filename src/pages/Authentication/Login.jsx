import PropTypes from 'prop-types'
import React from "react"

// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"


// actions
import { loginUser, apiError, socialLogin } from "../../store/actions"


const Login = props => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    props.loginUser(values, props.history)
  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          tt home
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        Hello
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
)

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func
}