import { Box, IconButton, Tooltip } from '@mui/material'
import React from 'react'

import FilterListIcon from '@mui/icons-material/FilterList'

function OrderButton(props) {

    return (
        props.load ? (
            <Box sx={{ float:'right'}}>
                {props.order === 'asc' ? (
                <Tooltip title="Filter by latest">
                    <IconButton onClick={() => {props.sortDsc()}}>
                        <FilterListIcon sx={{ fontSize:30, mb:1.4, mr:2, ml:1, color:'white' }}/>
                    </IconButton>
                </Tooltip>
                ) : (
                <Tooltip title="Filter by past">
                    <IconButton onClick={() => {props.sortAsc()}}>
                        <FilterListIcon sx={{ transform: 'rotate(-180deg)', fontSize:30, mb:1.4, mr:2, ml:1, color:'white'}}/>
                    </IconButton>
                </Tooltip>
                )}
            </Box>
        ) : (
            <Box sx={{ float:'right'}}>
                {props.order === 'asc' ? (
                <Tooltip title="Filter by latest">
                    <IconButton onClick={() => {props.sortDsc()}} disabled>
                        <FilterListIcon sx={{ fontSize:30, mb:1.4, mr:2, ml:1, color:'white' }}/>
                    </IconButton>
                </Tooltip>
                ) : (
                <Tooltip title="Filter by past">
                    <IconButton onClick={() => {props.sortAsc()}} disabled>
                        <FilterListIcon sx={{ transform: 'rotate(-180deg)', fontSize:30, mb:1.4, mr:2, ml:1, color:'white'}}/>
                    </IconButton>
                </Tooltip>
                )}
            </Box>
        )
    )
}

export default OrderButton