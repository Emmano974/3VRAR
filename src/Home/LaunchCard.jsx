import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function LaunchCard(props) {
    return (
        <>
        <Card sx={{ display:'flex' ,backgroundColor:"#012028", color:'white', minHeight:170, maxHeight:170 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow:1 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.launch.mission_name}
          </Typography>
          <Typography variant="body1" component="div">
          {new Date(props.launch.launch_date_unix*1000).toLocaleString()}
          </Typography>
        
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button onClick={() => props.detail(props.launch.id)}>
              Watch
          </Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.launch.links.mission_patch}
        alt={`${props.launch.mission_name}.png`}
      />
      
    </Card>
        </>
    )
}

export default LaunchCard