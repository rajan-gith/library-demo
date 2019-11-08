import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Authors from './author/Index.js';
import NewAuthor from './author/new';
import {Link} from 'react-router-dom'

class Menu extends Component{
	render() {
		return (
	      <BrowserRouter>
	      	<div className="nav-list">
	          <ul className="navstyle">
							<li>
								<Link to="/">
									Authors
								</Link>
							</li>
							<li>
								<Link to="/new">
									Create
								</Link>
							</li>
						</ul>
						<Switch>
	            <Route  exact path="/"  component = {Authors} />
	            <Route  exact path="/new"  component = {NewAuthor} />
	          </Switch>

	        </div>
	      </BrowserRouter>
		);
	}
}

export default Menu;
