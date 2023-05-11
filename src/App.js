import React from 'react';
import {Browser as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Signup from './pages/SignpPage/Signup';


function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={HomePage}/>
				<Route path='/sign-up' exact component={Signup}/>
			</Switch>
		</Router>
	);
}

export default App;
