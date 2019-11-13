import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Authors from './author/Index.js';
import NewAuthor from './author/new';
import View from './author/view';
import Show from './author/show';
import EditAuthor from './author/edit';
import ViewTime from './author/view_time';
import {Link} from 'react-router-dom'


class Menu extends Component{
	render() {
		return (
	      <BrowserRouter>
	      	<div className="nav-list">
	          <ul className="navstyle">
							<li>
								<Link to="/">
									Home
								</Link>
							</li>
							<li>
								<Link to="/authors">
									Authors
								</Link>
							</li>
							<li>
								<Link to="/view">
									View
								</Link>
							</li>
							<li>
								<Link to="/view_time">
									View time
								</Link>
							</li>
						</ul>
	        </div>
					<div>
						<Switch>
							<Route  exact path="/"  component = {Calculator} />
							<Route  exact path="/authors"  component = {Authors} />
							<Route  exact path="/authors/new"  component = {NewAuthor} />
							<Route  exact path="/view"  component = {View} />
							<Route  exact path="/view_time"  component = {ViewTime} />
							<Route  exact path="/authors/:id"  component = {Show} />
							<Route  exact path="/authors/:id/edit"  component = {EditAuthor} />
						</Switch>
					</div>
				</BrowserRouter>
		);
	}
}

function Home() {
	return (
		<div>
			Welcome to react client page(Home page).
		</div>
		);
}

// functions ready to use here
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
// end of ready to use functions

// created functional component to display msg
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
//end of functional component that displays msg


// creation of temperature input component
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
		// console.log(e.target.value);
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
					onChange={this.handleChange} />
      </fieldset>
    );
  }
}

//end of input component


//Calculator begins

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
		console.log(temperature);
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
		console.log(JSON.stringify(this.state));
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
// Calculator ends

export default Menu;
