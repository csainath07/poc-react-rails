import React, { FC } from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Home from 'components/Home/Home'
import './style.css'

const ReactApp: FC = () => {
  console.log("React app initiated")
  return (
    <div className="app">
      <BrowserRouter basename="/v2">
        <Switch>
          <Route exact={true} path="/">
            <a href="/dashboard" data-turbolinks="false">Dashboard(Rails View)</a>&nbsp;&nbsp;
            <Link to="/assessments">Assessments</Link>&nbsp;&nbsp;
            <Link to="/assessments/settings">Settings</Link>
            <Home message="Hello World" />
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

          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default ReactApp
