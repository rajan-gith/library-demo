import React, {Component} from 'react';

const initial_state = {
  first_name: '',
  last_name: '',
}

export default class EditAuthor extends Component{
		constructor(props){
	    super(props);
	    this.state = initial_state;
	    this.handleChange = this.handle_input.bind(this);
	    this.handleSubmit = this.submitHandler.bind(this);
	  }

    componentDidMount = () => {
      const { match: { params } } = this.props;
      fetch(`http://localhost:3000/api/v1/authors/${this.props.match.params.id}`,{
    		method: 'get',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "*",
          "Access-Control-Expose-Headers": "*",
          "Access-Control-Max-Age": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
        },
    	})
      .then(response => response.json())
      .then((result) => {
        if (result.status === 200){
  				this.setState({
  					isLoaded: true,
  					first_name: result.author.first_name,
            last_name: result.author.last_name,
  					errors: null
  				});
  			}
        else{
  				this.setState({
  					isLoaded: true,
            first_name: "",
            last_name: "",
  					errors: "Can not load the authors",
  				});
  			}
      })
      .catch(
        (error) => {
          this.setState({
            isLoaded: true,
            first_name: "",
            last_name: "",
            errors: "Can not load the authors. Problem with server",
          });
        }
      )
    }


	  submitHandler = (event) => {
      const { match: { params } } = this.props;
      console.log(JSON.stringify(this.state));
	  	fetch(`http://localhost:3000/api/v1/authors/${params.id}`,
	  		{
	  			method: "put",
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
          <br/>
          <input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
}
