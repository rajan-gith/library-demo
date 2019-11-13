import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Authors extends Component{
	search = (event) => {
		fetch(`http://localhost:3000/api/v1/authors?search_str=${event.target.value}`,{
  		method: 'get',
  	}).then(response => response.json())
		.then((result) => {
			if (result.status === 200){
				this.setState({
					isLoaded: true,
					authors: result.authors,
					errors: null
				});
			}
			else{
				this.setState({
					isLoaded: true,
					authors: [],
					errors: "Can not load the authors"
				});
			}
		})
	}

	constructor(props){
    super(props);
    this.state = {
      authors: [],
      isLoaded: false,
      errors: null,
    }
  }

	fetch_authors = () => {
		fetch("http://localhost:3000/api/v1/authors",{
  		method: 'get'
  	})
  	.then(response => response.json())
  	.then((result) => {
  			if (result.status === 200){
  				this.setState({
  					isLoaded: true,
  					authors: result.authors,
  					errors: null
  				});
  			}
  			else{
  				this.setState({
  					isLoaded: true,
  					authors: [],
  					errors: "Can not load the authors"
  				});
  			}
  		});
	}

  componentDidMount = () =>{
			this.fetch_authors()
  	}

	deleteHandle = (event) => {
		// console.log(event.target.getAttribute("data_key"));
		let yes = window.confirm("you sure to delete this user");
		if (yes === true){
			fetch(`http://localhost:3000/api/v1/authors/${event}`,{
	  		method: 'delete',
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
			.then(result => result.json())
			.then((result) => {
				// this.componentDidMount()
				this.fetch_authors();
			})
		}

	}


	render() {
		var { isLoaded, items } = this.state;
		if (this.state.isLoaded === true){
			return(
				<div>
					data is loaded.
					<Link to="/authors/new">
						Create
					</Link>
					<input onChange={ this.search }></input>
					{ this.state.authors.length===0 ?
						<div>No search result</div>:
						this.state.authors.map((author) => {
							return(
								<div key={author.id}>
									<Link to={`/authors/${author.id}`} >
										{author.id} : {author.first_name} {author.last_name}
									</Link>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<Link to={`/authors/edit/${author.id}`} >
										edit
									</Link>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<button onClick = {(e) => {this.deleteHandle(author.id)}} >Delete</button>
								</div>
							)
						})
					}
				</div>);
		}
		else{
			return(
				<div>
					Loading...
				</div>);
		}
	}



}
