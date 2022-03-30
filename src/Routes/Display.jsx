import { Container } from '@mui/material'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import LaunchDetails from '../Launches/LaunchDetails'
import Launches from '../Launches/Launches'

function Display() {
    return (
        <Container>
            <Switch>
                <Route path={'/Launches'} component={Launches} />
                <Route exact path={'/'} component={Home} />
                <Route path={'/Launch/:id'} component={LaunchDetails} />
            </Switch>
        </Container>
    )

}

export default Display
