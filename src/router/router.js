import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from '../view/home'

function Routers() {
	return <div className="router">
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home}></Route>
            </Switch>
            <Redirect to="/home"></Redirect>
        </Router>
    </div>
}

export default Routers
