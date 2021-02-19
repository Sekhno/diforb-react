// import * as $ from 'jquery'
// import Post from '@models/Post'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
// import WebpackLogo from '@/assets/webpack-logo.png'
import React from 'react'
import { render } from 'react-dom'
import './babel'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'
import Form from '@/components/form/Form'

// Import Firebase Configuration file
import { initFirebaseBackend } from "@/helpers/firebase_helper"

const firebaseConfig = {
	apiKey: "AIzaSyAISYi8vsy_vevtSubMdg1mpD9NXDkb6bE",
	authDomain: "diforb-3f984.firebaseapp.com",
	databaseURL: "https://diforb-3f984.firebaseio.com",
	projectId: "diforb-3f984",
	storageBucket: "diforb-3f984.appspot.com",
	messagingSenderId: "990232084653",
	appId: "1:990232084653:web:1c660e027f12719967c624"
}

// init firebase backend
initFirebaseBackend(firebaseConfig)

const App = () => (
	<div className="container">
		<Form title = "Login"/>
	</div>
)

render(<App />, document.getElementById('app'))
