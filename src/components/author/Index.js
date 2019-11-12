import React, {Component} from 'react';

export default class Authors extends Component{

	constructor(props){
    super(props);
    this.state = {
      authors: [],
      isLoaded: false,
      errors: null
    }
  }

  componentDidMount = () =>{


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


	render() {
		var { isLoaded, items } = this.state;

		if (this.state.isLoaded === true){
			return(
				<div>
					data is loaded.
					{
						this.state.authors.map((author) => {
							return(
								<div>
									{author.id} : {author.first_name} {author.last_name}
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
