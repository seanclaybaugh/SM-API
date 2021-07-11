import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';



function Login ({ setLogin, login }) {

  const handleSubmit = () => {

    console.log('submit');
    setLogin(!login);
  }

  return (<>
    <form onSubmit={handleSubmit}>
      <label> Username: </label>
      <input type='text'></input>

      <label> Password: </label>
      <input type='password' ></input>
      <input type='submit' value="Login"></input>
    </form>
  </>)
}


export default Login
