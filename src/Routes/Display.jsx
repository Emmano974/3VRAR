import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Launches from '../Launches/Launches'

function Display() {
    return (
        <Switch>
            <Route path={'/Launches'} component={Launches} />
            <Route path={'/Home'} component={Home} />
        </Switch>
    )

}

export default Display
