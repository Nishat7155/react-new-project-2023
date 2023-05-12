import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
	
  } from "react-router-dom";
import Home from './pages/Home/Home';
import Signup from './pages/SignUp/Signup';
import GlobalStyle from './globalStyles';
 

function App() {
	return (
		<Router>
			<GlobalStyle/>
			<Switch>
			    <Route path="/" exact component={Home} />
			    <Route path="/sign-up" exact component={Signup} />
			</Switch>
		</Router>
	);
}

export default App;
