import React, {Component} from 'react';
import ReactDOM from 'react-dom';
function View_me(props) {
  return <div>
    welcome {props.name}
  </div>
}
const names = ["avatar", "war", "stones", "captain", "fan"]

const names_div = (names.map((name) => { return (<div>Welcome please {name} <br/><br/></div>) }))

export default class View extends Component{
  render(){
    return (
      <div>
        { names_div }
      </div>
    );
  }
}
