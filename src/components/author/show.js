import React, {Component} from 'react';

export default class Show extends Component {

  constructor(props){
    super(props);
    this.state = {
      author: {},
      isLoaded: false,
      errors: null
    }
  };


  componentDidMount = () => {
    const { match: { params } } = this.props;
    fetch(`http://localhost:3000/api/v1/authors/${params.id}`,{
  		method: 'get'
  	})
    .then(response => response.json())
    .then((result) => {
        if (result.status === 200){
  				this.setState({
  					isLoaded: true,
  					author: result.author,
  					errors: null
  				});
  			}
        else{
  				this.setState({
  					isLoaded: true,
  					author: {},
  					errors: "Can not load the authors"
  				});
  			}
      })
    }


  render(){
    var { isLoaded, author } = this.state;
    if (this.state.isLoaded === true){
      return(
        <div>
          loaded! with id: {"{"} {author.id} {"}"}
          <br/>
          <br/>
          First Name: {author.first_name}
          <br/>
          <br/>
          Last Name: {author.last_name}
        </div>
      )
    }
    else {
      return(
        <div>
          loading...
        </div>
      )
    }
  }
}
