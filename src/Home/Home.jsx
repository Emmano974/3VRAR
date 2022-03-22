import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LaunchCard from './LaunchCard'

function Home() {


    const [nextLaunch, setNextLaunch] = useState()
    const [lastLaunch, setLastLaunch] = useState()

    const getNextLaunch = async () => {
        await axios({
            method: 'GET',
            url: 'https://api.spacex.land/rest/launch-next'
        })
        .then(res => {
            console.log(res.data)
            setNextLaunch(res.data)
        })
        .catch(err => console.log(err))
    }

    const getLastLaunch = async () => {
        await axios({
            method: 'GET',
            url: 'https://api.spacex.land/rest/launches-past'
        })
        .then(res => {
            console.log(res.data)
            setLastLaunch(res.data)
        })
        .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getNextLaunch()
        getLastLaunch()
    }, [])





    return (
        <div>
            <Grid container>
                <Grid item xs>
                    {nextLaunch ? (
                        <LaunchCard launch={nextLaunch} />
                    ) : null}
                    
                </Grid>
                {lastLaunch ? (
                <Grid item xs>
                    
                    <LaunchCard launch={lastLaunch[0]} />
                    <LaunchCard launch={lastLaunch[1]} />
                    <LaunchCard launch={lastLaunch[2]} />
                   
                </Grid>
                 ): null}
            </Grid>
        </div>
    )
}

export default Home