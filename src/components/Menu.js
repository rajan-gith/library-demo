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
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default Menu;
