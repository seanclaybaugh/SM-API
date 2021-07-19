import React, { useState } from 'react';
import axios from 'axios';


function Search () {
  const [tweetdata, setTweetData] = useState([]);
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(userId)
    try{
    const result = await axios.get(`/twitter/${userId}`)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setUserId(e.target.value)
  }

  return (
    <>
    <form onSubmit={handleSubmit} >
        <label>Input user ID: <input type="text" value={userId} onChange={handleChange}/> </label>
        <button type="submit">Submit</button>
    </form>
    </>

  )

}

export default Search;
