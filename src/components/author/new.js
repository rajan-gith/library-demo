import React, {Component} from 'react';

export default class NewAuthor extends Component{
	render() {
		return (
			<div>
				<form action="/action_page.php">
				  First name:<br/>
				  <input type="text" name="firstname" value="Mickey"/>
				  <br/>
				  Last name:<br/>
				  <input type="text" name="lastname" value="Mouse"/>
				  <br/>
				  <input type="submit" value="Submit"/>
				</form>
			</div> 
		);
	}
}
