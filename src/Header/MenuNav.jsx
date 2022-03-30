import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import martiniBlue from '../img/martiniBlue.png'

function MenuNav(props) {

    var optionsDate = {year: 'numeric', month: 'long', day: 'numeric' };     


    const [date, setDate] = useState(new Date().toLocaleDateString("fr-FR", optionsDate))
    const [time, setTime] = useState(new Date().toLocaleTimeString("fr-FR"))
    


    setTimeout(() => {
        setDate(new Date().toLocaleDateString("fr-FR", optionsDate))
        setTime(new Date().toLocaleTimeString("fr-FR"))
    }, 1000)


    return (
        <div>
            <div style={{ float:'left' }}>
                <Box sx={{ mr:5, color: 'white', float:'left' }}>
                    <img src={martiniBlue} width={100} alt={'logo'}/>
                </Box>
                <Link to={'/Home'} className={props.classes.navTitle}>
                    <Button key={1} sx={{ my: 3, color: 'white' }}>
                        {'Home'}
                    </Button>
                </Link>
                <Link to={'/Launches'} className={props.classes.navTitle}>
                    <Button key={2} sx={{ my: 3, color: 'white'}}>
                        {'Launches'}
                    </Button>
                </Link>
            </div>
            <div style={{float:'right'}}>
                <Typography sx={{ my: 3, color: 'white', float:'left' }}>
                    {date} {time}
                </Typography>   
            </div>
        </div>
    )
}

export default MenuNav