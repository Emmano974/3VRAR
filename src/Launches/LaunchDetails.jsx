import { Accordion, Card, Box, CardContent, Button, Grid, AccordionDetails, AccordionSummary, Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import EventIcon from '@mui/icons-material/Event';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import NumbersIcon from '@mui/icons-material/Numbers';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RocketIcon from '@mui/icons-material/Rocket';

import { useHistory } from 'react-router-dom';

function LaunchDetails() {

    let { id } = useParams();
    const history = useHistory();
    const [launch, setLaunch] = useState();

    const spaceXURL = 'https://api.spacex.land/rest';

    const getDetailLaunch = async (id) => {
        await axios({
            method: 'GET',
            url:`${spaceXURL}/launch/${id}`
        })
        .then(res => setLaunch(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => getDetailLaunch(id), [id])

    const redirectToDetailLaunch = (id) => {
        history.push(`/Launch/${id}`);
        getDetailLaunch(id);
    }

    

    return (
        <>{launch ? (
            <>
            <Box sx={{py:40, textAlign:'center', color:'white'}}>
                <Typography variant='h1' gutterBottom>{launch.mission_name}</Typography>
                <Typography>{launch.details}</Typography>
                <Button sx={{ mt:4 }} variant={'outlined'} onClick={() => window.location.href="#content"}>Read More</Button>
            </Box>
                    
            <Card sx={{ minWidth: 275 }} id='content'>
                <CardContent>
                    <Avatar src={launch.links.mission_patch} sx={{float:'left'}}/>
                    <Typography sx={{ fontSize: 25, pt:0.3, pl:8 }} color="text.secondary" gutterBottom>{launch.mission_name}</Typography>
                    <Typography sx={{ my: 1.5 }} color="text.secondary">{launch.details}</Typography>
                </CardContent>
            </Card>
            <Grid container justifyContent={'space-around'} my={5} columnSpacing={4}>
                <Grid item xs={6}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontSize: 20 }}  color="text.secondary">Missions</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {launch.rocket.first_stage.cores[0].core.missions.map(mission => (
                            <ListItem key={mission.flight} sx={{my:0}}>
                                <ListItemButton onClick={() => redirectToDetailLaunch(mission.flight)}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <RocketLaunchIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={mission.name}  secondary={mission.flight} />
                                </ListItemButton>
                            </ListItem>))}
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={6}>
                <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontSize: 20 }}  color="text.secondary">Launch</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <ListItem>
                              <ListItemAvatar>
                                  <Avatar>
                                      <NumbersIcon />
                                  </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary={launch.rocket.first_stage.cores[0].core.id} />
                              </ListItem>
                              <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <RocketLaunchIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={new Date(launch.rocket.first_stage.cores[0].core.original_launch).toLocaleDateString()}  secondary={new Date(launch.rocket.first_stage.cores[0].core.original_launch).toLocaleTimeString()} />
                            </ListItem>
                            <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <EventIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={launch.rocket.first_stage.cores[0].landing_type} />
                            </ListItem>
                            <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <RocketIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={launch.rocket.rocket_name} />
                            </ListItem>
                            <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <MyLocationIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={launch.launch_site.site_name_long} />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid> 
            {launch.links ? (
            <>
            {launch.links.flickr_images[0] ? (
            <>
                <Typography sx={{my:4}} variant={'h5'}>Launch photographs</Typography>
                <Grid container columnSpacing={4} justifyContent={'center'}>
                {launch.links.flickr_images.map(image => (
                    <Grid item xs={3}>
                        <img src={image} width={200} alt="launch images"/>
                    </Grid>
                ))}
                </Grid>
            </>
            ) : null}
            {launch.links.video_link ? (
                <>
                    <Typography sx={{my:4}} variant={'h5'}>Launch videos</Typography>
                    <iframe src={`https://youtube.com/embed/${launch.links.video_link.substr(17)}`} style={{ width:"60%", height:"60%", position:'absolute' }} frameBorder={0} allow='autoplay' title='launch_video'/>
                </>
                ) : null }
            
            </>
                
            ): null}
            </>
        ) : null}
        </>
    )
}


export default LaunchDetails