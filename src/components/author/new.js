import React, {Component} from 'react';

const initial_state = {
  first_name: 'jhhhh',
  last_name: '',
  type: '',
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
	  			body: JSON.stringify(this.state),
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
          <br/>
          <label>pick any fruit type:</label>
          <br/>
          <select value={this.state.type} onChange={this.handleChange}>
            <option value="">Please select</option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <br/>
          <br/>
          <input type="file" />
          <br/>
          <br/>
          <input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
}
