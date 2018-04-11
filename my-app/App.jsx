import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,Switch
} from "react-router-dom";
import Register from './src/Register';
import Aboutus from './src/AboutUs';
import Login from './src/Signin';
import Home from './src/Home';
import Resource from './src/Gallary';
import contuctus from './src/Contact';
import './src/App.css';

class App extends React.Component {
   	render() {
      	return (
      		<Router>
	         	<div class="container"> 
		         	<header>
						<nav>
					  		<ul>
					  			<li><Link to="/Home">Home</Link></li>
								<li><Link to="/Aboutus">About Us</Link></li>
								<li><Link to="/Resource">Gallary</Link></li>
								<li><Link to="/contuctus">Contact Us</Link></li>
								<li><Link to="/Register">Register Form</Link></li>
					  		</ul>
					  	</nav>
					</header>
					<Route path="/Home" component={Home} />
					<Route path='/register' component={Register}/>
					<Route path="/aboutus" component={Aboutus} />
					<Route path="/resource" component={Resource} />
					<Route path="/contuctus" component={contuctus}/>
	         	</div>
         	</Router>
      	);
   	}
}
export default App;