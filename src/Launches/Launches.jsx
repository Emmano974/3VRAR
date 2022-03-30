import { Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OrderButton from './OrderButton'
import Search from './Search'
import TableList from './TableList'

function Launches() {
  
    const [launchList, setLaunchList] = useState([])
    const [dataFilter, setDataFilter] = useState(launchList)
    const [order, setOrder] = useState("asc")
    const [loaded, setLoaded] = useState(false)

    const spaceXURL = 'https://api.spacex.land/rest'

    const getLauchList = async () => {
        await axios({
            method: 'GET',
            url: `${spaceXURL}/launches`
        })
        .then(res => {
            setLaunchList(res.data)
            setDataFilter(res.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }
    
    useEffect(() => getLauchList(), [])

    const searchMission = (e) => {      
        let result = [];
        result = launchList.filter((data) => data.mission_name.toLowerCase().search(e.target.value.toLowerCase()) !== -1)
        setDataFilter(result);  
    }

    const sortAscending = () => {
        setDataFilter([...launchList].sort((a, b) => a.launch_date_unix - b.launch_date_unix))
        setOrder("asc")
    }

    const sortDescending = () => {
        setDataFilter([...launchList].sort((a, b) => a.launch_date_unix - b.launch_date_unix).reverse())
        setOrder("dsc")
    }
    
    return (
        <Box>
            <Box sx={{mb:5}}> 
                <Search search={searchMission} load={loaded}/>
                <OrderButton load={loaded} sortAsc={sortAscending} sortDsc={sortDescending} order={order}/>
            </Box>
            <TableList launches={launchList} filteredData={dataFilter}  search={searchMission}  load={loaded}/>
            
        </Box>
    )
}

export default Launches