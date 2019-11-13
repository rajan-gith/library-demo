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
							<Route  exact path="/"  component = {FlavorForm} />
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
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Menu;
