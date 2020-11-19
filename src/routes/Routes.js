import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
// import { PageNotFoundView } from '../view/PageNotFoundView'
import { SignInView } from '../view/SignInView'
import RoutingPath from './RoutingPath'

export const Routes = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                {/* <Route exact path={RoutingPath.HomeView} component={HomeView} /> */}
                <Route exact path={RoutingPath.SignInView} component={SignInView} />
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}
