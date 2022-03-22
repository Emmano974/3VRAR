import { Card, CardHeader, Typography } from '@mui/material'
import React from 'react'

function LaunchCard(props) {
    return (
        <>
        <Card>
            <Typography>{props.launch.mission_name}</Typography>
            <Typography>{new Date(props.launch.launch_date_unix*1000).toLocaleString()}</Typography>
        </Card>
        </>
    )
}

export default LaunchCard