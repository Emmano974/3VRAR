import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import TableList from './TableList'

function Launches() {
  
    const [launch, setLaunch] = useState([])

    const getLauches = async () => {
        await axios({
            method: 'GET',
            url: 'https://api.spacex.land/rest/launches'
        })
        .then(res => {
            console.log(res.data)
            setLaunch(res.data)
        })
        .catch(err => console.log(err))

    }
    
    useEffect(() => {
        getLauches()
    }, [])




    return (
        <div>
            <Search />
            <TableList launches={launch} />
        </div>
    )
}

export default Launches