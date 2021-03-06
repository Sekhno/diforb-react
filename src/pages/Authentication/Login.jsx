import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { loginUser, apiError, socialLogin } from '../../store/actions'
import Form from '../../components/form/Form'

/**
 * 
 * @param {*} props 
 */
const Login = props => {
	const handleValidSubmit = (event, values) => {
		props.loginUser(values, props.history)
	}

	return (
		<React.Fragment>
			<Form title = 'login' />
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