import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class ViewTime extends Component{

  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount(){
    setInterval(() =>
      this.setState({
        date: new Date(),
      })
    ,1000)
  }


  render(){
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
