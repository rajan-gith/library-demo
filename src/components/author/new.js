import React, {Component} from 'react';

const initial_state = {
  first_name: '',
  last_name: '',
}

export default class NewAuthor extends Component{
		constructor(props){
	    super(props);
	    this.state = initial_state;
	    this.handleChange = this.handle_input.bind(this);
	    this.handleSubmit = this.submitHandler.bind(this);
	  }


	  submitHandler = (event) => {
	  	fetch("http://localhost:3000/api/v1/authors",
	  		{
	  			method: "post",
	  			headers: {
	  				"Content-Type": "application/json",
	  				"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Credentials": "*",
						"Access-Control-Expose-Headers": "*",
						"Access-Control-Max-Age": "*",
						"Access-Control-Allow-Methods": "*",
						"Access-Control-Allow-Headers": "*",
	  			},
	  			body: JSON.stringify(this.state)
	  		}).then(res => res.json()).then(
	  		(result) => {
	  		}, (error) => {
	  		});

    		event.preventDefault();
		    this.setState(initial_state)
	  }

	  handle_input = (event) => {
			this.setState( {[event.target.name]: event.target.value });
		}



	render() {
		return (
			<div>
				<form onSubmit = {this.handleSubmit}>
				  First name:<br/>
				  <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
				  <br/>
				  Last name:<br/>
				  <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
				  <br/>
				  <input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
}
