import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Login from './components/login.js'
import Search from './components/Search.js'


const Container = styled.div`
position:fixed;
top:0;
left:0;
width: 100%;
height: 100%;
justify-content: center;
background-color: 578AD6;
color: white;
`

function App () {



  return (

  <Container> Hello Luke

   <Search />
  </Container>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'));