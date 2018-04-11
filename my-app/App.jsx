import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,Switch
} from "react-router-dom";
import Register from './Register';
import Aboutus from './AboutUs';
import Home from './Home';
import Resource from './Gallary';
import contuctus from './Contact';
import './App.css';

class App extends React.Component {
   	render() {
      	return (
      		<Router>
	         	<div> 
		         	<header>
						<nav>
					  		<ul>
					  			<li><Link to="/home">Home</Link></li>
								<li><Link to="/Aboutus">About Us</Link></li>
								<li><Link to="/Resource">Gallary</Link></li>
								<li><Link to="/contuctus">Contact Us</Link></li>
					  		</ul>
					  	</nav>
					</header>

					<Route path="/home" component={Home} />
					<Route path="/aboutus" component={Aboutus} />
					<Route path="/resource" component={Resource} />
					<Route path="/contuctus" component={contuctus}/>
	         	</div>
         	</Router>
      	);
   	}
}
export default App;