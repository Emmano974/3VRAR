import './App.css';
import React from 'react'
import Display from './Routes/Display';
import Header from './Header/Header';
import { Box } from '@mui/material';

function App() {

  return (
  <>
      <Header />
      <Box sx={{my:4}}>
        <Display />
      </Box>
      
    </>

  );
}

export default App;
