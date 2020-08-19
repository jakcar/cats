import React from 'react'
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import RandomCats from './RandomCats'
import CatForm from './CatForm'

function App() {
  return (
    <div className="App">
      <h1>Katthörnan</h1>
      <Router>
        <nav>
          <ul className="nav">
            <li className="nav-option">
              <NavLink
                exact={true}
                className="link"
                activeClassName="link-active"
                to="/cats"
              >
                Slumpa
              </NavLink>
            </li>
            <li className="nav-option">
              <NavLink
                className="link"
                activeClassName="link-active"
                to="/filter"
              >
                Filtrera
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/cats">
            <RandomCats initialValue={1} />
          </Route>
          <Route path="/filter">
            <CatForm />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
