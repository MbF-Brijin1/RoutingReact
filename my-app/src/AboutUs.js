import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDashboardAction } from '../src/actions/dashboardActions';



class Aboutus extends Component {
	render() {
		return(
			<div className="aboutus-content section-row">
				<div className="container">
					<h1>About us page</h1>
					<p>yea totally my mistake. when using create-react-app, it creates a public folder, thats where the html is, I had created a html in the src folder which was not being loaded... Thanks for all the help. When changing the right index.html page in the public folder everything worked</p>
				</div>
			</div>

		);
	}
}
function mapStateToProps(state) {
	console.log()
}

export default  connect (mapStateToProps,{getDashboardAction})(Aboutus);