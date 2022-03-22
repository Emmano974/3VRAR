import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios'
import Display from './Routes/Display';
import Header from './Header/Header';

function App() {

  const [launch, setLaunch] = React.useState([])

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
    <>
      <Header />
      <Display />
    
    </>

  );
}

export default App;
