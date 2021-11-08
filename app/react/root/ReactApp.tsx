import React, { FC } from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import './style.css'

const ReactApp: FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
            <Link to="/assessments">Assessments</Link>&nbsp;&nbsp;
            <Link to="/assessments/settings">Settings</Link>
            <h1>Home Page</h1>
          </Route>

          <Route exact={true} path="/assessments">
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/assessments/settings">Settings</Link>
            <h1>Assessments Page</h1>
          </Route>

          <Route exact={true} path="/assessments/settings">
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/assessments">Assessments</Link>
            <h1>Assessments Settings Page</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default ReactApp
