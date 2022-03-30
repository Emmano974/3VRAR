import { Box, Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import LaunchCard from './LaunchCard'

function Home() {


    const [nextLaunch, setNextLaunch] = useState()
    const [lastLaunch, setLastLaunch] = useState()
    const history = useHistory()

    const spaceXURL = 'https://api.spacex.land/rest'


    const getNextLaunch = async () => {
        await axios({
            method: 'GET',
            url: `${spaceXURL}/launch-next`
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
            url: `${spaceXURL}/launches-past`,
            params: {
                limit: 3
            }
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

    const redirectToDetailLaunch = (id) => {
        history.push(`/Launch/${id}`)
    }

    return (
        <div>
            <canvas id="bgCanvas"></canvas>
            <Box sx={{py:40, textAlign:'center', color:'white'}}>
                <Typography variant='h1'>Welcome to Blue Corp</Typography>
                <Typography mt={4}>A spaceX API reader</Typography>
                <Button sx={{ mt:4 }} variant={'outlined'} onClick={() => window.location.href="#explore"}>Explore</Button>
            </Box>
            <Box id='explore'>
                <Typography variant='h5' my={4}>Next Launch :</Typography>
                <Grid container justifyContent={'center'} columnSpacing={4}>
                    <Grid item xs={5}>
                        {nextLaunch ? (
                            <LaunchCard launch={nextLaunch} detail={redirectToDetailLaunch} />
                        ) : null}
                        
                    </Grid>
                </Grid>
                <Typography variant='h5' my={4}>Latest Launches :</Typography>
                <Grid container justifyContent={'center'} columnSpacing={4}>
                    {lastLaunch ? (  
                        lastLaunch.map(launch => (
                            <Grid item xs={4}>
                                <LaunchCard key={launch.id} launch={launch} detail={redirectToDetailLaunch} />
                            </Grid>
                        ))
                    ): null}
                </Grid>
            </Box>
        </div>
    )
}

export default Home